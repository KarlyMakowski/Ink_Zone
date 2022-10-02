import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button"

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCOfrmhWC1yKAsBff5BA9PRLH7dKN67mGM",
  authDomain: "ink-zone-9637c.firebaseapp.com",
  projectId: "ink-zone-9637c",
  storageBucket: "ink-zone-9637c.appspot.com",
  messagingSenderId: "372713622138",
  appId: "1:372713622138:web:e5acd18dd8e83c8d5189c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const GoogleAuth = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const onClickGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result._tokenResponse;
    await actions.authGoogle(user);
    navigate("/profile");
  }

  return (
    <div className="googleAuth">
      <GoogleButton onClick={onClickGoogle}/>
    </div>

  );
};



