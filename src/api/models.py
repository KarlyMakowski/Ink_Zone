from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(80), default="")
    lastname = db.Column(db.String(80), default="")
    phonenumber = db.Column(db.Integer, default=0)
    facebook = db.Column(db.String(80), default="")
    instagram = db.Column(db.String(80), default="")
    twitter = db.Column(db.String(80), default="")
    picture = db.Column(db.String(500), nullable=True)
    role = db.Column(db.String(15), default="")
    is_active = db.Column(db.Boolean(), default=True,
                          unique=False, nullable=True)
    reviews = db.relationship('Reviews')
    favourites = db.relationship('Favourites')
    publish = db.relationship('Publish')

    def __repr__(self):
        f'<User %r>' % self.email

    def serialize(self):  # do not serialize the password, its a security breach
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "phonenumber": self.phonenumber,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "twitter": self.twitter,
            "picture": self.picture,
            "role": self.role,
            "is_active": self.is_active
        }


class Publish(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    picture = db.Column(db.String(500), nullable=True)
    styles = db.Column(db.String(50), default="")
    description = db.Column(db.String(1200), default="")
    files = db.Column(db.String(500), default="")
    facebook = db.Column(db.String(80), default="")
    instagram = db.Column(db.String(80), default="")
    twitter = db.Column(db.String(80), default="")
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id', ondelete="CASCADE"), nullable=True)

    def __repr__(self):
        f'<Publish %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "picture": self.picture,
            "styles": self.styles,
            "description": self.description,
            "files": self.files,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "twitter": self.twitter,
            "user_id": self.user_id,
        }


class Styles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    style = db.Column(db.String(50), nullable=False)
    information = db.Column(db.String(1200), nullable=False)
    image = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f'<Styles %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "style": self.style,
            "information": self.information,
            "image": self.image,
        }


class Prices(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(80), nullable=False)
    size = db.Column(db.String(80), nullable=False)
    what_does_include = db.Column(db.String(120), nullable=False)
    type_of_tattoo = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<Prices %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category,
            "price": self.price,
            "image": self.image,
            "size": self.size,
            "what_does_include": self.what_does_include,
            "type_of_tattoo": self.type_of_tattoo,
        }


class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    review = db.Column(db.String(1200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id', ondelete="CASCADE"), nullable=False)

    def __repr__(self):
        return f'<Reviews %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "review": self.review,
            "user_id": self.user_id
        }


class Favourites(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    styles_id = db.Column(db.Integer, db.ForeignKey(
        'styles.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<Favourites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "styles_id": self.styles_id,
            "user_id": self.user_id,
        }


class BlackList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)
