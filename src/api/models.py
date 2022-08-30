from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User %r>' % self.id

    def serialize(self):  # do not serialize the password, its a security breach
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "is_active": self.is_active,
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