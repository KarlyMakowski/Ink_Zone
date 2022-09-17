from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User, Styles, Prices
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not username: return jsonify({"status": "failed", "msg": "Missing username!"}), 400
    if not email: return jsonify({"status": "failed", "msg":"Missing email address!"}), 400
    if not password: return jsonify({"status": "failed", "msg":"Enter a password!"}), 400   
    
    email_already_exists = User.query.filter_by(email=email).first()
    if email_already_exists: 
        return jsonify({"status": "failed", "msg":"Email already registered!"}), 409
    else:
        pw_hash = current_app.bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, email=email, password=pw_hash)
        db.session.add(user)
        db.session.commit()
    
        return f'Welcome {username}, you succesfully signed up!', 200 


#Route to authenticate users and return JWTs --> LOG IN
@api.route('/token', methods=['POST', 'GET'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter_by(email = email).first()    
    
    if user:
        if password != user.password:
            return jsonify({"msg" : "Not valid password"}), 401
        else:
            access_token = create_access_token(identity = email)
        return jsonify(access_token = access_token)
    else:
        return jsonify({"msg" : "Not valid email"}), 401
    
    response_body = {
        "message": "Successfuly logged in"
    }
    return jsonify(response_body), 200


@api.route('/hello', methods=['GET'])
@jwt_required()
def get_hello():
    
    email = get_jwt_identity()
    dictionary = {
        "message": "hello world " + email
    }
    
    return jsonify(dictionary)




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

