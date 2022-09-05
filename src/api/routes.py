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
        user = User(name=body_name, email=body_email, password=body_password) 
        db.session.add(user)
        db.session.commit()
        return jsonify({"created":True,"user":user.email}), 200
    else: 
        return jsonify({"created":False, "msg":"Something went wrong"})


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

