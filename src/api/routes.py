from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User, Styles, Prices
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity
from flask_bcrypt import Bcrypt

import re

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
    
    if username and email and password and confirm_password == password:

        if not username: return jsonify({"created": False, "msg": "Missing username!"}), 400
    
        if not email: return jsonify({"created": False, "msg": "Missing email address!"}), 400
    
        if not password: return jsonify({"created": False, "msg": "Enter a password!"}), 400
    
        if not re.match(regex_username, username):
            return jsonify({"created": False, "msg": "Not valid username!"}), 400
    
        if not re.fullmatch(regex_email, email):
            return jsonify({"created": False, "msg": "Not valid email!"}), 400

        if not re.search(regex_password, password):
            return jsonify({"created": False, "msg": "You need a min 8 characters password, with at least a symbol, upper and lower case letters, and a number"}), 400
    
        if User.query.filter_by(email = email).first() is not None:
            return jsonify({"created": False, "msg": "Email already exists!"}), 409

        if User.query.filter_by(username = username).first() is not None:
            return jsonify({"created": False, "msg": "Username already exists!"}), 409
        
        else:
            pw_hash = current_app.bcrypt.generate_password_hash(password).decode('utf-8')
            new_user = User(username = username, email = email, password = pw_hash)
            db.session.add(new_user)
            db.session.commit()
    
            response_body = {
            "created": True,
            "msg": f'Welcome {username}, you succesfully signed up!'
        }
    
        return jsonify(response_body), 201 
    
    else: return jsonify({"created": False, "msg": "Passwords do not match!"}), 400

@api.route('/token', methods=['POST']) #AUTHENTICATION / LOG IN
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter_by(email = email).first() 
    
    if user:
        passw_is_correct = current_app.bcrypt.check_password_hash(user.password, password)
        
        if passw_is_correct:
            refresh_token = create_refresh_token(identity = email)
            access_token = create_access_token(identity = email)
        return jsonify(access_token = access_token, refresh_token = refresh_token)
    
    else:
        return jsonify({"msg": "Wrong credentials!"}), 401
    
    response_body = {
        "msg": "Successfuly logged in"
    }
    
    return jsonify(response_body), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username = current_user).first()
    
    if user:
        response_body = {
        "username": user.username,
        "email": user.email,
        "msg": f'Welcome back {current_user}!',
        "logged_in": True
    }
        return jsonify(response_body), 200
    else:
        
        return ({"logged_in": False}), 400

@api.route('/token/refresh', methods=['GET'])
@jwt_required(refresh = True)
def refresh_users_token():
    identity = get_jwt_identity()
    access = create_access_token(identity = identity)
    
    response_body = {
        "access": access
    } 
    
    return jsonify(response_body), 200

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

