import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCOfrmhWC1yKAsBff5BA9PRLH7dKN67mGM",
  authDomain: "ink-zone-9637c.firebaseapp.com",
  projectId: "ink-zone-9637c",
  storageBucket: "ink-zone-9637c.appspot.com",
  messagingSenderId: "372713622138",
  appId: "1:372713622138:web:e5acd18dd8e83c8d5189c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("profilePic", profilePic)
  })
  .catch((error) =>{
      console.log(error)
  })

  
};