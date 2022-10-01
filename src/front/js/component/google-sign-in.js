import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebase from "./firebase";
import { auth, provider } from "./firebase";


export const googleLogin = () => {
    return (
        <button onClick={signInWithGoogle}>Sign in with google</button>
    )
}


