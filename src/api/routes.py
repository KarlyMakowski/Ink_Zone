from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Styles, Prices
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():

    body_name = request.json.get("name")
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_password_confirmation = request.json.get("confirmPassword")
    if body_name and body_email and body_password and body_password_confirmation ==body_password: 
        if User.query.filter_by(email = body_email).first():
            return jsonify ({"created":False, "msg":"User already exist"})
        else:
            user = User(name=body_name, email=body_email, password=body_password) 
            db.session.add(user)
            db.session.commit()
            return jsonify({"created":True,"user":user.email}), 200
    else: 
        return jsonify({"created":False, "msg":"Something went wrong"})
    

@api.route('/login', methods=['POST'])
def login():

    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password: 
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user: 
            if body_email != user.email:  
                return jsonify({"logged":False, "msg":"Email o password incorrecto"})
            else:
                token = create_access_token(identity=user.id)
                return jsonify({"logged":True, "user":user.serialize(),"token":token}), 200
        else:       
            return jsonify({"logged":False, "msg":"Email o password incorrecto"}), 400
    else: 
        return jsonify({"logged":False, "msg":"Faltan campos por rellenar"}), 400


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

