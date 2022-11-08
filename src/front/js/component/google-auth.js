import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { getFirestore } from "firebase/firestore"; // *******************PARA EL CHAT??

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app); // ***************PARA EL CHAT??

export const GoogleAuth = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const onClickGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken(/* forceRefresh */ true);
      store.token = idToken;
      sessionStorage.getItem("token");
      actions.authGoogle(user);
      store.currentUser = {
        name: user.displayName,
        username: user.email.split("@")[0],
        email: user.email,
        picture: user.photoURL,
      };
      navigate("/profile");
    } catch (error) {
      console.error(error);
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
