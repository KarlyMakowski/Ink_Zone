from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User, Styles, Prices, Reviews
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity
from flask_bcrypt import Bcrypt

import re
import cloudinary
import cloudinary.api
from cloudinary.uploader import upload


""" cloudinary.config( 
    cloud_name = "daahnwdra", 
    api_key = "316871795959153", 
    api_secret = "Aa3JYOvrl2yNciZW-xiB79VfNNo",
    secure = True
)  """


api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    confirm_password = request.json.get("confirm_password", None)
    # username allowed characters first, it has to be 8-20 characters long, no _ or . at the beginning, no __ or _. or ._ or .. inside, no _ or . at the end.
    regex_username = re.compile(r'^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$')
    # email validation (special characters needed)
    regex_email = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')
    # password minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    regex_password = re.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}$")
    
    
    if not username: return jsonify({"created": False, "status": "failed", "msg": "Missing username!"}), 400
    if not email: return jsonify({"created": False, "status": "failed", "msg": "Missing email address!"}), 400
    if not password: return jsonify({"created": False, "status": "failed", "msg": "Enter a password!"}), 400
    if not re.match(regex_username, username):
            return jsonify({"created": False, "status": "failed", "msg": "Not valid username!"}), 400
    if not re.fullmatch(regex_email, email):
            return jsonify({"created": False, "status": "failed", "msg": "Not valid email!"}), 400
    if not re.search(regex_password, password):
            return jsonify({"created": False, "status": "failed", "msg": "You need a min 8 characters password, with at least a symbol, upper and lower case letters, and a number"}), 400
    
    if username and email and password and confirm_password == password:
        if User.query.filter_by(email = email).first() is not None:
            return jsonify({"created": False, "status": "failed", "msg": "Email already exists!"}), 409
        if User.query.filter_by(username = username).first() is not None:
            return jsonify({"created": False, "status": "failed", "msg": "Username already exists!"}), 409        
        else:
            pw_hash = current_app.bcrypt.generate_password_hash(password).decode('utf-8')
            new_user = User(username = username, email = email, password = pw_hash)
            db.session.add(new_user)
            db.session.commit()
    
            response_body = {
                "status": "succes",
                "created": True,
                "msg": f'Welcome {username}, you succesfully signed up!'
            }
    
        return jsonify(response_body), 201 
    
    else:         
        return jsonify({"created": False, "status": "failed", "msg": "Passwords do not match!"}), 400


@api.route('/token', methods=['POST']) #AUTHENTICATION / LOG IN
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter_by(email = email).first() 
    
    if not email: return({"logged": False, "status": "failed", "msg": "Write your email address"}), 400
    if not password: return({"logged": False, "status": "failed", "msg": "Enter your password"}), 400
    
    if user:
        passw_is_correct = current_app.bcrypt.check_password_hash(user.password, password)
        
        if passw_is_correct:
            token = create_access_token(identity = email)
            refresh_token = create_refresh_token(identity = email)  
            
            response_body = {
                "logged": True,
                "status": "success",
                "msg": "Successfuly logged in",
                "user": user.serialize(),
                "email": user.email,
                "username": user.username,
                "token": token,                    
                "refresh": refresh_token,
            }
                     
            return jsonify(response_body), 200
    
    return jsonify({"logged": False, "status": "failed", "msg": "Wrong credentials!"}), 401
    

@api.route('/token/refresh', methods=['GET'])
@jwt_required(refresh = True)
def refresh_users_token():
    current_user = get_jwt_identity()
    token = create_access_token(identity = current_user)
    
    response_body = {
        "token": token
    } 
    
    return jsonify(response_body), 200


@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email = current_user).first()
    
    if user:
        response_body = {
            "logged": True,
            "status": "success",           
            "msg": f'Welcome back {current_user}!',
        }
        
        return jsonify(response_body), 200
    
    else:                
        return ({"status": "failed", "logged": False}), 400


@api.route('/create-review', methods=['GET','POST'])
@jwt_required()
def create_post():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email = current_user).first()
    review = request.json.get("review", None)
    
    if request.method == 'POST':
        
        if not review: return jsonify({"created": False, "msg": "Please, write your review!"}), 400
                    
        new_review = Reviews(review = review, user_id = user.id)
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
       all_reviews = Reviews.query.filter_by(user_id = user.id)
       reviews_list = list(map(lambda review:review.serialize(), all_reviews))
       
       response_body = {
           "review": reviews_list,
           "user": user.username
       }
       
       return jsonify(response_body), 200 


""" @api.route('/private', methods=['PUT'])
@jwt_required()
def private_update():
    user = get_jwt_identity()
    current_user = User.query.get(user)
    
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    name = request.json.get("name", None)
    lastname = request.json.get("lastname", None)
    phonenumber = request.json.get("phonenumber", None)
    facebook = request.json.get("facebook", None)
    instagram = request.json.get("instagram", None)
    twitter = request.json.get("twitter", None)
    
    if "picture" in request.files:
        profile_picture = request.files["picture"]
    
        if profile_picture != "":
            uploading_picture = cloudinary.uploader.upload(request.files["profile_picture"])
             
            if not uploading_picture: return jsonify({"status": "failed", "msg":"There was an error while uploading your image!", "data": None}), 400
            current_user.profile.picture = uploading_picture["secure_url"]      """                                          
                                                           
@api.route('/styles', methods=['GET'])
def get_styles():
    styles = Styles.query.all()
    styles_list = list(map(lambda styles: styles.serialize(), styles))
    
    return jsonify(styles_list), 200


@api.route('/prices', methods=['GET'])
def get_prices():
    prices = Prices.query.all()
    prices_list = list(map(lambda prices: prices.serialize(), prices))
    
    return jsonify(prices_list), 200

