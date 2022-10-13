from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(80), default="")
    lastname = db.Column(db.String(80), default="")
    phonenumber = db.Column(db.Integer, default=0)
    facebook = db.Column(db.String(80), default="")
    instagram = db.Column(db.String(80), default="")
    twitter = db.Column(db.String(80), default="")
    picture = db.Column(db.String(100), nullable=True)
    is_active = db.Column(db.Boolean(), default=True,
                          unique=False, nullable=True)
    role = db.relationship('Role')
    reviews = db.relationship('Reviews')
    favourites = db.relationship('Favourites')

    def __repr__(self):
        f'<User %r>' % self.email

    def serialize(self):  # do not serialize the password, its a security breach
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "phonenumber": self.phonenumber,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "twitter": self.twitter,
            "picture": self.picture,
            "email": self.email,
            "username": self.username,
            "is_active": self.is_active,
        }


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)

    def __repr__(self):
        return f'<Role %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }


class Styles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    style = db.Column(db.String(200), unique=True, nullable=False)
    information = db.Column(db.String(2000), nullable=False)
    image = db.Column(db.String(2000), nullable=False)

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
    category = db.Column(db.String(200), unique=True, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    image = db.Column(db.String(2000), nullable=False)
    size = db.Column(db.String(2000), nullable=False)
    what_does_include = db.Column(db.String(2000), nullable=False)
    type_of_tattoo = db.Column(db.String(2000), nullable=False)

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


class Experts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    lastname = db.Column(db.String(200), nullable=False)
    image = db.Column(db.String(2000), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    instagram = db.Column(db.String(2000), nullable=False)

    def __repr__(self):
        return f'<Experts %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "image": self.image,
            "description": self.description,
            "instagram": self.instagram,
        }


class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    review = db.Column(db.String(3000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id', ondelete="CASCADE"), primary_key=True, nullable=False)

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
        'styles.id'), primary_key=True)
    experts_id = db.Column(
        db.Integer, db.ForeignKey('experts.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)

    def __repr__(self):
        return f'<Favourites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "styles_id": self.styles_id,
            "experts_id": self.experts_id,
            "user_id": self.user_id,
        }


class BlackList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)
