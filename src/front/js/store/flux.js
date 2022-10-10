import Notiflix, { Notify } from "notiflix";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      currentUser: null,
      styles: [],
      privateStyle: [],
      addFav: false,
      favCount: 0,
      prices: [],
    },

    actions: {
      signup: async (e, navigate) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = getStore();

        try {
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/signup",
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
          if (status === "failed") {
            Notify.failure(msg, {
              width: "350px",
              position: "center-top",
              distance: "820px",
              borderRadius: "6px",
              timeout: 2000,
              clickToClose: true,
              fontSize: "25px",
              cssAnimationStyle: "zoom",
              useFontAwesome: true,
              failure: {
                fontAwesomeClassName: "fas fa-skull",
              }
            });
          }
          if (status === "success") {
            Notify.success(msg, {
              width: "350px",
              position: "center-top",
              distance: "820px",
              borderRadius: "6px",
              timeout: 2000,
              clickToClose: true,
              fontSize: "25px",
              cssAnimationStyle: "zoom",
              useFontAwesome: true,
              success: {
                fontAwesomeClassName: "fas fa-hand-peace",
              }
            });
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
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/token",
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
          if (status === "failed") {
            Notify.failure(msg, {
              width: "320px",
              position: "right-top",
              distance: "750px",
              borderRadius: "6px",
              timeout: 2000,
              clickToClose: true,
              fontSize: "25px",
              cssAnimationStyle: "zoom",
              useFontAwesome: true,
              failure: {
                fontAwesomeClassName: "fas fa-skull",
              },
            });
          }
          if (status === "success") {
            Notify.success(msg, {
              width: "320px",
              distance: "130px",
              borderRadius: "6px",
              timeout: 2000,
              clickToClose: true,
              fontSize: "25px",
              cssAnimationStyle: "zoom",
              useFontAwesome: true,
              success: {
                fontAwesomeClassName: "fas fa-hand-peace",
              },
            })
            setStore({ currentUser: user, token: token });
            sessionStorage.setItem("token", token);
            navigate("/profile");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      loadProfile: async (e) => {
        e.preventDefault();
        const {
          username,
          email,
          name,
          lastname,
          phonenumber,
          facebook,
          instagram,
          twitter,
        } = getStore();

        try {

          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/private",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token")
              },
              body: JSON.stringify({
                username: username,
                email: email,
                name: name,
                lastname: lastname,
                phonenumber: phonenumber,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
              }),
            }
          );
          const { status, msg, user } = await resp.json();
          if (status === "failed") {
            Notify.failure("There has been an error updating your profile");
          }
          if (status === "success") {
            Notify.success(msg, {
              width: "260px",
              position: "center-top",
              distance: "130px",
              borderRadius: "6px",
              timeout: 2000,
              clickToClose: true,
              fontSize: "25px",
              cssAnimationStyle: "zoom",
              useFontAwesome: true,
              success: {
                fontAwesomeClassName: "fas fa-marker",
              },
            });
            setStore({ currentUser: user });
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      logout: (navigate) => {
        Notify.info("See you next time!", {
          width: "300px",
          position: "center-top",
          distance: "130px",
          borderRadius: "6px",
          timeout: 2000,
          clickToClose: true,
          fontSize: "25px",
          cssAnimationStyle: "zoom",
          useFontAwesome: true,
          info: {
            fontAwesomeClassName: "fas fa-hand-peace",
          },
        });
        sessionStorage.removeItem("token");
        setStore({ token: null, currentUser: null });
        navigate("/");
      },

      uploadPicture: async (e) => {
        e.preventDefault();
        const { picture } = getStore();

        try {
          let formData = new FormData();
          formData.append("picture", picture);

          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/private/upload-picture",
            {
              method: "PUT",
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
              body: formData,
            }
          );
          const { status, msg, user } = await resp.json();
          if (status === "failed") {
            Notify.failure(msg);
          }
          if (status === "success") {
            Notify.success(msg, {
              width: "300px",
              position: "left-top",
              distance: "140px",
              borderRadius: "6px",
              timeout: 2000,
              clickToClose: true,
              fontSize: "25px",
              cssAnimationStyle: "zoom",
              useFontAwesome: true,
              success: {
                fontAwesomeClassName: "fas fa-camera",
              },
            });
            setStore({ currentUser: user });
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      handlePicture: (e) => {
        const { files } = e.target;
        setStore({ picture: files[0] });
      },

      deleteProfile: async (navigate) => {
        try {
          fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/private",
            {
              method: "DELETE",
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
            }
          );
          const { status, msg } = await resp.json();
          if (status === "failed") {
            Notify.failure("There was an error deleting your account");
          }
          if (status === "success") {
            Notify.info(msg);
            sessionStorage.removeItem("token", token);
            setStore({ token: null, currentUser: null });
            navigate("/");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      loadStyles: () => {
        fetch(
          "https://ink-zone.herokuapp.com/api/styles/"
        )
          .then((response) => response.json())
          .then((data) => setStore({ styles: data }));
      },

      loadSingleStyle: (id) => {
        fetch(
          `https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/styles/private/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
          .then((response) => response.json())
          .then((data) => setStore({ privateStyle: data }));
      },

      handleFav: (id) => {
        fetch(
          `https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/styles/private/favourite/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ addFav: data.is_favourite, favCount: data.fav_counter });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      handleCount: (id) => {
        fetch(
          `https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/styles/private/favourite/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ favCount: data.fav_counter, addFav: data.is_favourite });
            console.log(data)
          })
          .catch((error) => {
            console.log(error);
          });
      },

      loadPrices: () => {
        fetch(
          "https://ink-zone.herokuapp.com/api/prices/"
        )
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
