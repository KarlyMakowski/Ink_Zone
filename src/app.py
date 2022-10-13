"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, BlackList
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
import cloudinary
import firebase_admin
from firebase_admin import credentials

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# FIREBASE ADMIN SDK
cred = credentials.Certificate("firebase-admin-key.json")
firebase_admin.initialize_app(cred)

# JWT MANAGER
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_Secret_Key')
jwt = JWTManager(app)

# TOKEN BLACKLIST
@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
    # try:
    #     decoded_token = auth.verify_id_token(id_token, check_revoked=True)
    #     uid = decoded_token['uid']

    #     return False

    # except auth.RevokedIdTokenError:
    #     pass

    # except auth.UserDisabledError:
    #     pass

    # except auth.InvalidIdTokenError:
    #     pass

    jti = jwt_payload["jti"]
    token = db.session.query(BlackList.id).filter_by(jti=jti).scalar()

    return token is not None


# PASSWORD ENCRYPTATION
bcrypt = Bcrypt(app)
app.bcrypt = bcrypt

# UPLOAD IMAGES CLOUDINARY
app.config['CLOUD_NAME'] = os.environ.get("CLOUD_NAME")
app.config['CLOUD_API_KEY'] = os.environ.get("CLOUD_API_KEY")
app.config['CLOUD_API_SECRET'] = os.environ.get("CLOUD_API_SECRET")

cloudinary.config(
    cloud_name=app.config['CLOUD_NAME'],
    api_key=app.config['CLOUD_API_KEY'],
    api_secret=app.config['CLOUD_API_SECRET'],
    secure=True
)

# SEND RECOVER PASSWORD TO USERS
app.config['MAIL_SERVER'] = 'smtp.mailtrap.io'
app.config['MAIL_PORT'] = 3001
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
