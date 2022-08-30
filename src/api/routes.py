"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Styles
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/styles', methods=['GET'])
def get_styles():
    styles = Styles.query.all()
    styles_list = list(map(lambda styles: styles.serialize(), styles))
    return jsonify(styles_list), 200