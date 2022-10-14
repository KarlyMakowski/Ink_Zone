import os
from flask_admin import Admin
from .models import db, User, Role, UserRoles, Styles, Prices, Experts, Reviews, Favourites
from flask_admin.contrib.sqla import ModelView


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Role, db.session))
    admin.add_view(ModelView(UserRoles, db.session))
    admin.add_view(ModelView(Styles, db.session))
    admin.add_view(ModelView(Prices, db.session))
    admin.add_view(ModelView(Experts, db.session))
    admin.add_view(ModelView(Favourites, db.session))
    admin.add_view(ModelView(Reviews, db.session))
