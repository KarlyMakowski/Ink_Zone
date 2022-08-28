"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/singup', methods=['POST'])
def singup():

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
        return jsonify({"created":False, "msg":"Algo salió mal"})
