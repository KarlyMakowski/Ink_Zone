# WELCOME TO INK ZONE!

<p align="center" style="margin: 0">
<img src="src/front/img/ink-zone.png" width= 400px />
</p>

## ABOUT THE PROJECT
#
This web application is divided in two main parts:

- Front-End: React.js 
- Back-End: Python/Flask.

It is integrated with Pipenv for package managing and SQLAlchemy for database abstraction. We also made use of .env file.
<br/>
<br/>

## BACK-END
#
### MANUAL INSTALLATION:
It is recomended to install the backend first, make sure you have Python 3.10, Pipenv and a database engine.

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Models.py is already created in order to define the different tables and relationships between them. If you want to modify ani of them, you will have to follow these steps:
   - Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
   - Run the migrations: `$ pipenv run upgrade`
   - Run the application: `$ pipenv run start`
4. We also added to `admin.py` all the models so we could work through that view as well.
<br/>
<br/>

### FLASK INSTALLATION AND DOCUMENTATION:
In order to create the different routes you'll find in `routes.py`, we used the following Flask extensions:
- [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io/en/1.0.1/) , which provided bcrypt hashing utilities for our application. It is an advisable choice for sensitive data that must be protected, such as passwords.<br/> We used this extension in register and token (log in) routes.
- Next step was to install [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/en/stable/) . We used `create_access_token()` in order to make JSON Web Tokens, `jwt_required()` in order to protect routes, and `get_jwt_identity()` in order to get the identity of a JWT in a protected route.


We had to import and set up both extensions in `routes.py` and `app.py`.<br/>
<br/>

### PYTHON DOCUMENTATION:
In addition, we had to use different Python's built-in packages:
- `Re` so that we were able to work with Regular Expressions (RegEx). We wanted to ckeck that the username, email and password during sign up followed the patterns we specified.
- `Datetime`, a module that allowed us to work with times. We used it in order to declare user's token duration.
- `Cloudinary`, which allowed us to integrate our application with cloudinary in order to upload image files. Here you can get the [link to install](https://www.npmjs.com/package/cloudinary) this package.<br/> In this particular case, we also had to import and set up the extension in `routes.py` and `app.py`.
<br/>
<br/>

## FRONT-END
#



### Styles

You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components

Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)

Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context

This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
    //here you use useContext to get store and actions
    const { store, actions } = useContext(Context);
    return <div>{/* you can use your actions or store inside the html */}</div>;
};
```
### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% integrated with Herkou, [follow this tutorial](https://start.4geeksacademy.com/backend/deploy-heroku-posgres) and just by pushing your changes to the heroku repository will deploy the website afterwards.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)