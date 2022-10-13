import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCOfrmhWC1yKAsBff5BA9PRLH7dKN67mGM",
  authDomain: "ink-zone-9637c.firebaseapp.com",
  projectId: "ink-zone-9637c",
  storageBucket: "ink-zone-9637c.appspot.com",
  messagingSenderId: "372713622138",
  appId: "1:372713622138:web:e5acd18dd8e83c8d5189c3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const GoogleAuth = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const onClickGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      try {
        const idToken = await user.getIdToken(/* forceRefresh */ true);
        store.token = idToken;
        sessionStorage.getItem("token");
      } catch (error) {
        console.error({ error });
      }
      actions.authGoogle(user);
      console.log({ user });
      store.currentUser = {
        name: user.displayName,
        username: user.email.split("@")[0],
        email: user.email,
        picture: user.photoURL,
      };
      navigate("/profile");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <div className="googleAuth">
      <GoogleButton onClick={onClickGoogle} />
    </div>
  );
};
