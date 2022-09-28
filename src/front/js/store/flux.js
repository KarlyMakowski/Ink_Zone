import Notiflix, { Notify } from "notiflix";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      currentUser: null,
      picture: null,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      name: "",
      lastname: "",
      phonenumber: "",
      facebook: "",
      instagram: "",
      twitter: "",
      styles: [],
      privateStyle: [],
      addFav: [],
      favCount: 0,
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
          if(status == "success") {
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
          if(status == "failed") {
            Notify.failure(msg)
          } 
          if(status == "success"){
            setStore({currentUser: user, token: token});
            sessionStorage.setItem("token", token);
            navigate("/profile");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      profile: async (user) => {
        try {
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/private",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
              body: JSON.stringify(user),
            }
          );
          const {status, msg} = await resp.json();
          if(status == "failed") {
            Notify.failure(msg)
          }
          if(status == "success") {
            Notify.success(msg)
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },  

      logout: (navigate) => {
        Notify.info("See you next time!")
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
            if(status == "failed"){
              Notify.failure(msg)
            }
            if(status == "success") {
              Notify.success(msg)
              setStore({currentUser: user})
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
        fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/styles/")
          .then((response) => response.json())
          .then((data) => setStore({ styles: data }));
      },

      loadSingleStyle: (id) => {
        fetch(`https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/styles/private/${id}`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ privateStyle: data }));
      },

      handleFav: async (id, addElem) => {
        try {
          const resp = await fetch(
            `https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/styles/private/favourite/${id}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
              body: JSON.stringify(id),
            }
          );
          const {status, msg} = await resp.json();
          const store = getStore();
          if(status == "failed") {
            Notify.failure(msg);
          }
          if(status == "success") {
            Notify.success(msg);
            setStore({ addFav: [...store.addFav, addElem] })
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      handleCount: async () => {
        try {
          const resp = await fetch(
            
          )
        }
      }

      loadPrices: () => {
        fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu67.gitpod.io/api/prices/")
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
