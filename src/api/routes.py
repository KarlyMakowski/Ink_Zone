from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User, Publish, Styles, Prices, Reviews, Favourites, BlackList, File
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity, get_jwt_header
from flask_bcrypt import Bcrypt
from flask_mail import Mail, Message
import random
import string
import re
import datetime
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
    role = request.json.get("role", None)
    # username pattern which accepts 5 to 15 characters with any lower case character, digit or special symbol “_-” only.
    regex_username = re.compile(
        r'^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$')
    # email validation (special characters needed)
    regex_email = re.compile(
        r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')
    # password minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    regex_password = re.compile(
        "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")

    if not role:
        return jsonify({"created": False, "status": "failed", "msg": "Select type of user"}), 400
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

    if role and username and email and password and confirm_password == password:
        if User.query.filter_by(email=email).first() is not None:
            return jsonify({"created": False, "status": "failed", "msg": "Email already exists!"}), 409
        if User.query.filter_by(username=username).first() is not None:
            return jsonify({"created": False, "status": "failed", "msg": "Username already exists!"}), 409

        else:
            pw_hash = current_app.bcrypt.generate_password_hash(
                password).decode('utf-8')
            new_user = User(username=username, email=email,
                            password=pw_hash, role=role)

            db.session.add(new_user)
            db.session.commit()

            response_body = {
                "status": "success",
                "created": True,
                "msg": "Successfully signed up!",
                "user": new_user.serialize()
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
        return ({"status": "failed", "msg": "Write your email address"}), 400
    if not password:
        return ({"status": "failed", "msg": "Enter your password"}), 400

    if user:
        passw_is_correct = current_app.bcrypt.check_password_hash(
            user.password, password)

        if passw_is_correct:
            token_expiration = datetime.timedelta(days=1)
            token = create_access_token(
                identity=email, expires_delta=token_expiration)

            response_body = {
                "status": "success",
                "msg": "Successfully logged in",
                "token": token,
                "user": user.serialize()
            }

            return jsonify(response_body), 200

    return jsonify({"status": "failed", "msg": "Wrong credentials!"}), 401


@api.route('/token/google', methods=['POST'])
def auth_google():
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    picture = request.json.get("picture", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        pw_hash = current_app.bcrypt.generate_password_hash(
            "google").decode("utf-8")
        user = User(username=username, email=email,
                    password=pw_hash, picture=picture)

    else:
        user.username = username
        user.picture = picture
        user.email = email

    db.session.add(user)
    db.session.commit()

    response_body = {
        "status": "success",
        "msg": "Logged in with Google!",
        "username": username,
        "email": email,
        "picture": picture,
        "token": create_access_token(identity=email)
    }

    return jsonify(response_body), 200


@api.route('/logout', methods=['DELETE'])
@jwt_required()
def logout():
    token = get_jwt()
    jti = token["jti"]
    now = datetime.now(timezone.utc)

    db.session.add(TokenBlocklist(jti=jti,  created_at=now))
    db.session.commit()

    return jsonify({"msg": "Token successfully revoked"})


@api.route('/password-recovery', methods=['POST'])
def recover_password():
    body = json.loads(request.data)
    email = body["email"]

    new_password = "".join(random.choice(
        string.ascii_uppercase + string.digits) for x in range(10))
    pw_hash = current_app.bcrypt.generate_password_hash(
        new_password).decode("utf-8")

    user = User.query.filter_by(email=email).first()

    if user != None:
        user.password = pw_hash
        db.session.commit()

        mail = Mail()
        msg = Message("Password Recovery", sender="Ink-Zone",
                      recipients=[user.email])
        msg.body = "Hello " + user.username + \
            ", this is your new password: " + new_password + "."
        msg.html = "<h1>INK ZONE</h1><h2> Hey " + user.username + "</h2> <p>You asked and we delivered! Let's get you a new password here: <b> " + new_password + \
            "</b></p><p>If you did not make this request then please ignore this email.</p>"
        mail.send(msg)

        response_body = {
            "status": "success",
            "msg": "Email sent!"
        }

        return jsonify(response_body), 200

    else:
        response_body = {
            "status": "failed",
            "msg": "This email does not exist"
        }

        return jsonify(response_body), 400


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

    if user.role == "Expert":
        publish = Publish.query.filter_by(user_id=user.id).first()

    user.username = username
    user.email = email
    user.name = name
    user.lastname = lastname
    user.phonenumber = phonenumber
    user.facebook = facebook
    user.instagram = instagram
    user.twitter = twitter
    publish.facebook = facebook
    publish.instagram = instagram
    publish.twitter = twitter

    db.session.commit()

    response_body = {
        "status": "success",
        "msg": "Account updated",
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
            "msg": "Picture updated",
            "user": user.serialize()
        }

        return jsonify(response_body), 200


@api.route('/private/publish/<id>', methods=['PUT'])
@jwt_required()
def create_expert(id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    username = request.json.get("username", None)
    picture = request.json.get("picture", None)
    styles = request.json.get("styles", None)
    description = request.json.get("description", None)
    files = request.json.get("files", None)
    facebook = request.json.get("facebook", None)
    instagram = request.json.get("instagram", None)
    twitter = request.json.get("twitter", None)

    if user != None:
        expert = Publish.query.filter_by(user_id=user.id).first()

        if expert == None:
            create_expert = Publish(user_id=user.id, username=username, picture=picture, styles=styles,
                                    description=description, facebook=facebook, instagram=instagram, twitter=twitter)

            db.session.add(create_expert)
            db.session.commit()

            response_body = {
                "created": True,
                "status": "success",
                "msg": "Successfully published",
                "expert": expert.serialize(),

            }

            return jsonify(response_body), 200

        else:
            expert.username = username
            expert.picture = picture
            expert.styles = styles
            expert.description = description
            expert.files = files
            expert.facebook = user.facebook
            expert.instagram = user.instagram
            expert.twitter = user.twitter

            db.session.commit()

            response_body = {
                "status": "success",
                "msg": "Successfully modified your info",
                "expert": expert.serialize()
            }

            return jsonify(response_body), 200

    else:
        return jsonify({"status": "failed", "msg": "Your info could not be saved"}), 400


@api.route('/private/multiple-upload', methods=['PUT'])
@jwt_required()
def multiple_upload():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    expert = Publish.query.filter_by(user_id=user.id).first()

    if "files" in request.files:
        files = request.files.getlist("files")

        for file in files:
            multiple_upload = cloudinary.uploader.upload(
                file, folder="Ink Zone")

            if not multiple_upload:
                return jsonify({"status": "failed", "msg": "There was an error during upload!", "user": None}), 400

            new_file = File(publish_id=expert.id,
                            url=multiple_upload["secure_url"])

            db.session.add(new_file)

        db.session.commit()

        files = File.query.filter_by(publish_id=expert.id).all()
        files_list = list(map(lambda files: files.serialize(), files))

        response_body = {
            "status": "success",
            "msg": "Files updated",
            "files": files_list
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
        "msg": "Hope to see you back! :("
    }

    return jsonify(response_body), 200


@api.route('/experts', methods=['GET'])
def get_experts():
    experts = Publish.query.all()
    experts_list = list(map(lambda experts: experts.serialize(), experts))

    return jsonify(experts_list), 200


@api.route('/experts-art-work/<id>', methods=['GET'])
def get_art(id):
    art = File.query.filter_by(publish_id=id)
    art_work = list(map(lambda art: art.serialize(), art))

    return jsonify(art_work), 200


@api.route('/experts-search', methods=['POST', 'GET'])
def search_expert():
    response_body = User.query.filter_by(
        role="Expert").order_by(User.username).all()
    response_body = [user.serialize() for user in response_body]

    return json.dumps(response_body), 200


@api.route('/styles', methods=['GET'])
def get_styles():
    styles = Styles.query.all()
    styles_list = list(map(lambda styles: styles.serialize(), styles))

    return jsonify(styles_list), 200


@api.route('/styles/private/<id>', methods=['GET'])
@jwt_required()
def private_styles_info(id):
    style_info = Styles.query.filter_by(id=id).first()

    return (style_info.serialize()), 200


@api.route('/styles/private/favourite/<id>', methods=['GET', 'POST'])
@jwt_required()
def fav(id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    style = Styles.query.filter_by(id=id).first()
    fav = Favourites.query.filter_by(
        user_id=user.id, styles_id=style.id).first()
    fav_count = Favourites.query.filter_by(styles_id=style.id).count()
    is_fav = False

    if request.method == 'POST':
        if not user:
            return jsonify({"status": "failed", "msg": "Please, log in!!"}), 400

        elif not fav:
            fav = Favourites(user_id=user.id, styles_id=style.id)
            fav_add = fav_count + 1
            is_fav = True

            db.session.add(fav)
            db.session.commit()

            response_body = {
                "status": "success",
                "msg": "You got it! :)",
                "fav_counter": fav_add,
                "is_favourite": is_fav,
                "user": user.username
            }

            return jsonify(response_body), 200

        else:
            fav_delete = fav_count - 1

            db.session.delete(fav)
            db.session.commit()

            response_body = {
                "status": "success",
                "msg": ":(",
                "fav_counter": fav_delete,
                "is_favourite": is_fav,
                "user": user.username
            }

            return jsonify(response_body), 200

    else:
        favourites = Favourites.query.filter_by(user_id=user.id).all()
        fav_list = list(map(lambda style: style.serialize(), favourites))

        if not fav:
            response_body = {
                "user": user.username,
                "favourites": fav_list,
                "fav_counter": fav_count,
                "is_favourite": is_fav
            }

        else:
            is_fav = True

            response_body = {
                "user": user.username,
                "favourites": fav_list,
                "fav_counter": fav_count,
                "is_favourite": is_fav
            }

        return jsonify(response_body), 200


@api.route('/prices', methods=['GET'])
def get_prices():
    prices = Prices.query.all()
    prices_list = list(map(lambda prices: prices.serialize(), prices))

    return jsonify(prices_list), 200


# --> COMING SOON... !!!


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

        response_body = {
            "status": "success",
            "msg": "You just deleted your review!"
        }

        return jsonify(response_body), 200
