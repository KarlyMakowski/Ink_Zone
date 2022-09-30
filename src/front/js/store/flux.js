import Notiflix, { Notify } from "notiflix";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      token: null,
      currentUser: null,
      message: "",
      name: "",
      lastname: "",
      phonenumber: "",
      facebook: "",
      instagram: "",
      twitter: "",
      picture: null,
      styles: [],
      prices: [],
    },

    actions: {
      signup: async (e, navigate) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = getStore();

        try {
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirm_password: confirmPassword,
              }),
            }
          );
          const { status, msg, created } = await resp.json();
          if (status == "failed") {
            Notify.failure(msg)
          }
          if (status == "success") {
            Notify.success(msg)
            setStore({ created: created });
            sessionStorage.setItem("created", created);
            navigate("/sign-in");
          }
        } catch (error) {
          console.error("Error loading message from backend", error);
        }
      },

      login: async (e, navigate) => {
        e.preventDefault();
        const { email, password } = getStore();

        try {
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            }
          );
          const { status, msg, user, token } = await resp.json();
          if (status == "failed") {
            Notify.failure(msg)
          }
          if (status == "success") {
            setStore({ currentUser: user, token: token })
            sessionStorage.setItem("token", token)
            navigate("/profile")
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      loadProfile: async () => {
/*         e.preventDefault();
 */
        const { username, email, name, lastname, phonenumber, facebook, instagram, twitter } = getStore();

        try {
          let formData = new FormData();

          formData.append('username', username);
          formData.append('email', email);
          formData.append('name', name);
          formData.append('lastname', lastname);
          formData.append('phonenumber', phonenumber);
          formData.append('facebook', facebook);
          formData.append('instagram', instagram);
          formData.append('twitter', twitter);

          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/private",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token")
              },
              body: formData,
            },
          );
          const { status, msg, user } = await resp.json();
          if (status === "failed") {
            Notify.failure("There has been an error updating your profile")
          }
          if (status === "success") {
            Notify.success(msg)
            setStore({ currentUser: user })
          }
        }
        catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      logout: (navigate) => {
        Notify.info("See you next time! :smiley:")
        sessionStorage.removeItem("token");
        setStore({ token: null, currentUser: null });
        navigate("/")
      },

      uploadPicture: async (e) => {
        const { picture } = getStore()
        e.preventDefault();

        try {
          let formData = new FormData();
          formData.append("picture", picture)

          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/private/upload-picture",
            {
              method: "PUT",
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
              },
              body: formData
            }
          );
          const { status, msg, user } = await resp.json();
          if (status == "failed") {
            Notify.failure(msg)
          }
          if (status == "success") {
            Notify.success(msg)
            setStore({ currentUser: user })
          }
        }
        catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      handlePicture: (e) => {
        const { files } = e.target;
        setStore({ "picture": files[0] });
      },

      loadStyles: () => {
        fetch("https://ink-zone.herokuapp.com/api/styles/")
          .then((response) => response.json())
          .then((data) => setStore({ styles: data }));
      },

      loadPrices: () => {
        fetch("https://ink-zone.herokuapp.com/api/prices/")
          .then((response) => response.json())
          .then((data) => setStore({ prices: data }));
      },

      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          [name]: value,
        });
      },
    },
  };
};

export default getState;
