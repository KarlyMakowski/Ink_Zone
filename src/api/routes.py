from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User, Styles, Prices, Reviews
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity
from flask_bcrypt import Bcrypt
from flask_mail import Mail

import re
import cloudinary
import cloudinary.api
from cloudinary.uploader import upload

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    confirm_password = request.json.get("confirm_password", None)
    # username pattern which accepts 5 to 15 characters with any lower case character, digit or special symbol “_-” only.
    regex_username = re.compile(
        r'^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$')
    # email validation (special characters needed)
    regex_email = re.compile(
        r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')
    # password minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    regex_password = re.compile(
        "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")

    if not username:
        return jsonify({"created": False, "status": "failed", "msg": "Missing username!"}), 400
    if not email:
        return jsonify({"created": False, "status": "failed", "msg": "Missing email address!"}), 400
    if not password:
        return jsonify({"created": False, "status": "failed", "msg": "Enter a password!"}), 400
    if not re.match(regex_username, username):
        return jsonify({"created": False, "status": "failed", "msg": "Not valid username!"}), 400
    if not re.fullmatch(regex_email, email):
        return jsonify({"created": False, "status": "failed", "msg": "Not valid email!"}), 400
    if not re.search(regex_password, password):
        return jsonify({"created": False, "status": "failed", "msg": "You need a min 8 characters password, with at least a symbol, upper and lower case letters, and a number"}), 400

    if username and email and password and confirm_password == password:
        if User.query.filter_by(email=email).first() is not None:
            return jsonify({"created": False, "status": "failed", "msg": "Email already exists!"}), 409
        if User.query.filter_by(username=username).first() is not None:
            return jsonify({"created": False, "status": "failed", "msg": "Username already exists!"}), 409
        else:
            pw_hash = current_app.bcrypt.generate_password_hash(
                password).decode('utf-8')
            new_user = User(username=username, email=email, password=pw_hash)
            db.session.add(new_user)
            db.session.commit()

            response_body = {
                "status": "success",
                "created": True,
                "msg": f'Welcome {username}, you succesfully signed up!'
            }

        return jsonify(response_body), 201

    else:
        return jsonify({"created": False, "status": "failed", "msg": "Passwords do not match!"}), 400


@api.route('/token', methods=['POST'])  # AUTHENTICATION / LOG IN
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if not email:
        return ({"logged_in": False, "status": "failed", "msg": "Write your email address"}), 400
    if not password:
        return ({"logged_in": False, "status": "failed", "msg": "Enter your password"}), 400

    if user:
        passw_is_correct = current_app.bcrypt.check_password_hash(
            user.password, password)

        if passw_is_correct:
            token = create_access_token(identity=email)
            refresh_token = create_refresh_token(identity=email)

            response_body = {
                "logged_in": True,
                "status": "success",
                "msg": "Successfuly logged in",
                "user": user.serialize(),
                "token": token,
                "refresh": refresh_token,
            }

            return jsonify(response_body), 200

    return jsonify({"logged_in": False, "status": "failed", "msg": "Wrong credentials!"}), 401


@api.route('/token/refresh', methods=['GET'])
@jwt_required(refresh=True)
def refresh_users_token():
    current_user = get_jwt_identity()
    token = create_access_token(identity=current_user)

    response_body = {
        "user": user.serialize(),
        "token": token
    }

    return jsonify(response_body), 200


@api.route('/private', methods=['PUT'])
@jwt_required()
def private_update():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    username = request.json.get("username")
    if username == "" or username == None:
        username = user.username

    email = request.json.get("email")
    if email == "" or email == None:
        email = user.email

    name = request.json.get("name")
    if name == "" or name == None:
        name = user.name

    lastname = request.json.get("lastname")
    if lastname == "" or lastname == None:
        lastname = user.lastname

    phonenumber = request.json.get("phonenumber")
    if phonenumber == "" or phonenumber == None:
        phonenumber = user.phonenumber

    facebook = request.json.get("facebook")
    if facebook == "" or facebook == None:
        facebook = user.facebook

    instagram = request.json.get("instagram")
    if instagram == "" or instagram == None:
        instagram = user.instagram

    twitter = request.json.get("twitter")
    if twitter == "" or twitter == None:
        twitter = user.twitter

    user.username = username
    user.email = email
    user.name = name
    user.lastname = lastname
    user.phonenumber = phonenumber
    user.facebook = facebook
    user.instagram = instagram
    user.twiter = twitter

    db.session.commit()

    response_body = {
        "status": "succees",
        "msg": "You successfully updated your profile!",
        "user": user.serialize()
    }

    return jsonify(response_body), 200


@api.route('/private/upload-picture', methods=['PUT'])
@jwt_required()
def upload_image():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    if "picture" in request.files:
        image_upload = cloudinary.uploader.upload(
            request.files["picture"], folder="Ink Zone")

        if not image_upload:
            return jsonify({"status": "failed", "msg": "There was an error during upload!", "user": None}), 400

        user.picture = image_upload["secure_url"]

        db.session.commit()

        response_body = {
            "status": "success",
            "msg": "You successfully uploaded your picture!",
            "user": user.serialize()
        }

        return jsonify(response_body), 200


@api.route('/private', methods=['DELETE'])
@jwt_required()
def delete_profile():
    current_user = get_jwt_identity()
    delete_user = User.query.filter_by(email=current_user).first()

    db.session.delete(delete_user)
    db.session.commit()

    response_body = {
        "status": "success",
        "msg": "Profile successfully deleted"
    }

    return jsonify(response_body), 200


@api.route('/styles', methods=['GET'])
def get_styles():
    styles = Styles.query.all()
    styles_list = list(map(lambda styles: styles.serialize(), styles))

    return jsonify(styles_list), 200


@api.route('/styles/private/<id>', methods=['GET'])
def private_styles_info(id):
    style_info = Styles.query.filter_by(id=id).first()

    return (style_info.serialize()), 200


"""@api.route('/favourite/<styles_id>', methods=['POST'])
@jwt_required()
def fav(styles_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(email = current_user).first()
    style = Styles.query.filter_by(id = styles_id)
    fav = Favourites.query.filter_by(user_id = user.id, styles_id = styles_id)
    
    if not style:
        return jsonify({"status": "failed", "msg": "Style does not exist!"}), 404
    elif fav:
        db.session.delete(fav)
        db.session.commit()
    else:
        fav = Favourites(user_id = user.id, styles_id = styles_id)
        
        db.session.add(fav)
        db.session.commit()
        
        response_body = {
            "status": "success",
            "msg": "You got it! :)"
        }
        
        return jsonify(response_body), 200 """


@api.route('/users-reviews', methods=['GET', 'POST'])
@jwt_required()
def create_review():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    review = request.json.get("review", None)

    if request.method == 'POST':

        if not review:
            return jsonify({"created": False, "msg": "Please, write your review!"}), 400

        new_review = Reviews(review=review, user_id=user.id)
        db.session.add(new_review)
        db.session.commit()

        response_body = {
            "created": True,
            "user": user.username,
            "review": new_review.review,
            "msg": "Review successfuly created!"
        }

        return jsonify(response_body), 201

    else:
        all_reviews = Reviews.query.filter_by(user_id=user.id)
        reviews_list = list(
            map(lambda review: review.serialize(), all_reviews))

        response_body = {
            "review": reviews_list,
            "user": user.username
        }

        return jsonify(response_body), 200


@api.route('/users-reviews/<id>', methods=['GET'])
@jwt_required()
def get_review(id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    review = request.json.get("review", None)
    single_review = Reviews.query.filter_by(id=id, user_id=user.id).first()

    if not single_review:
        return jsonify({"status": "failed", "msg": "Review does not exist!"}), 404

    response_body = {
        "user": user.username,
        "review": single_review.review
    }
    return jsonify({response_body}), 200


@api.route('/users-reviews/<id>', methods=['PUT', 'PATCH'])
@jwt_required()
def edit_review(id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    edit_review = Reviews.query.filter_by(id=id, user_id=user.id).first()
    review = request.json.get("review", None)

    if not edit_review:
        return jsonify({"status": "failed", "msg": "Review does not exist!"}), 404

    edit_review.review = review

    db.session.commit()

    response_body = {
        "review": edit_review.review,
        "user": user.username,
    }

    return jsonify(response_body), 200


@api.route('/users-reviews/<id>', methods=['DELETE'])
@jwt_required()
def delete_review(id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    review = Reviews.query.filter_by(id=id, user_id=user.id).first()

    if not review:
        return jsonify({"status": "failed", "msg": "Review does not exist!"}), 404
    elif user.id != review.user_id:
        return jsonify({"status": "failed", "msg": "You are not allowed to delete this review!"}), 401
    else:
        db.session.delete(review)
        db.session.commit()

        return jsonify({}), 204


@api.route('/prices', methods=['GET'])
def get_prices():
    prices = Prices.query.all()
    prices_list = list(map(lambda prices: prices.serialize(), prices))

    return jsonify(prices_list), 200
