# WELCOME TO INK ZONE!

<p align="center" style="margin: 0">
<img src="src/front/img/ink-zone.png" width= 400px />
</p>

## ABOUT THE PROJECT

We are @Binkitubo and @KarlyMakowski, and we present you our final project `Ink Zone`.<br/>
We wanted to develop a web application which allowed people interested in tattoos to find the style that suited them the best, and to get in contact with tattooers that dominate the different techniques related with those styles.

At the top of the page, you can see our brand logo. We considered that sphynx cats are strongly related with the tattoo industry, that's why que chose this animal in order to represent our brand.

This web application is divided in two main parts:

- Front-End: using React.js 
- Back-End: using Python and Flask.

It is integrated with Pipenv for package managing and SQLAlchemy for database abstraction. We also made use of .env file.

## BACK-END

### MANUAL INSTALLATION:
It is recomended to install the backend first, make sure you have Python 3.10, Pipenv and a database engine.

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Models.py is already created in order to define the different tables and relationships between them. If you want to modify any of them, you will have to follow these steps:
   - Migrate the migrations: `$ pipenv run migrate` (skip if you don't want to make changes to the models on the `./src/api/models.py`)
   - Run the migrations: `$ pipenv run upgrade`
   - Run the application: `$ pipenv run start`
4. We also added to `admin.py` all the models so we could work through that view as well.

### FLASK INSTALLATION AND DOCUMENTATION:
In order to create the different routes you'll find in `routes.py`, we used the following Flask extensions:
- [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io/en/1.0.1/) , which provided bcrypt hashing utilities for our application. It is an advisable choice for sensitive data that must be protected, such as passwords.<br/> 
We used this extension in register and token (log in) endpoints.
- Next step is to install [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/en/stable/) . We use `create_access_token()` to make JSON Web Tokens, `jwt_required()` to protect routes, and `get_jwt_identity()` to get the identity of a JWT in a protected route.

We have to import and set up both extensions in `routes.py` and `app.py`.

### PYTHON DOCUMENTATION:

In addition, we have to use different Python's built-in packages:
- `Re` so that we are able to work with Regular Expressions (RegEx). We want to ckeck that the username, email and password during sign up follows the patterns we specify.
- `Datetime`, a module that allows us to work with times. We use it to declare user's token duration.
- `Cloudinary`, which allows us to integrate our application with cloudinary in order to upload image files. Here you can get the [link to install](https://www.npmjs.com/package/cloudinary) this package.<br/> 
In this particular case, we also have to import and set up the extension in `routes.py` and `app.py`.

## FRONT-END

### MANUAL INSTALLATION:

Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start the webpack dev server `$ npm run start`

### VIEWS

This web application is divided in different views for the user to navigate the website.

<p align="center">
<img src="https://res.cloudinary.com/daahnwdra/image/upload/v1664992901/home-gif_qurdkt.gif" height=350px />
</p>

### STYLES

We designed our website mainly using CSS properties.<br/>
Each view has its own CSS file, as we wanted to create a colourful app and catch user's eyes.<br/>

However, we also used [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) to help us make it responsive.

<p align="center">
<img src="https://res.cloudinary.com/daahnwdra/image/upload/v1664992529/styles-gif_hrfal2.gif" height=350px/>
</p>

💡Note: If you want to `LEARN MORE`, you will have to sign up! 😜

### CONTEXT

This web app comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure to store the different variables in flux.<br/>
We used the Fetch API tool to connect with the backend application using async/await syntax, and declare the different actions through all our site.

# HOPE YOU LIKE IT! ENJOY DISCOVERING IT BY YOURSELF!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/KarlyMakowski/Ink_Zone)

