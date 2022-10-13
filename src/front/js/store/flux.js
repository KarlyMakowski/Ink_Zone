import Swal from "sweetalert2";

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
            Swal.fire({
              title: msg,
              toast: true,
              width: "34em",
              icon: "error",
              color: "#ff6242",
              position: "top-end",
              animation: true,
              showConfirmButton: true,
              timer: 6000,
              timerProgressBar: true,
            });
          }
          if (status === "success") {
            Swal.fire(msg);
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
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");

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
            Swal.fire({
              title: msg,
              toast: true,
              width: "34em",
              icon: "error",
              color: "#ff6242",
              position: "top-end",
              animation: true,
              showConfirmButton: false,
              timer: 6000,
              timerProgressBar: true,
            });
          }
          if (status === "success") {
            Swal.fire(msg);
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
                Authorization: "Bearer " + sessionStorage.getItem("token"),
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
            Swal.fire({
              title: msg,
              toast: true,
              width: "34em",
              icon: "error",
              color: "#ff6242",
              position: "top-end",
              animation: true,
              showConfirmButton: false,
              timer: 6000,
              timerProgressBar: true,
            });
          }
          if (status === "success") {
            Swal.fire(msg);
            setStore({ currentUser: user });
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      logout: (navigate) => {
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
            Swal.fire({
              title: msg,
              toast: true,
              width: "34em",
              icon: "error",
              color: "#ff6242",
              position: "top-end",
              animation: true,
              showConfirmButton: false,
              timer: 6000,
              timerProgressBar: true,
            });
          }
          if (status === "success") {
            Swal.fire(msg);
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
            Swal.fire({
              title: msg,
              toast: true,
              width: "34em",
              icon: "error",
              color: "#ff6242",
              position: "top-end",
              animation: true,
              showConfirmButton: false,
              timer: 6000,
              timerProgressBar: true,
            });
          }
          if (status === "success") {
            Swal.fire(msg);
            sessionStorage.removeItem("token", token);
            setStore({ token: null, currentUser: null });
            navigate("/");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      authGoogle: async (user) => {
        try {
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/token/google",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
              body: JSON.stringify({
                username: user.displayName,
                email: user.email,
                picture: user.photoUrl,
              }),
            }
          );
          const { status, msg, token, username, email, picture } =
            await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              toast: true,
              width: "34em",
              icon: "error",
              color: "#ff6242",
              position: "top-end",
              animation: true,
              showConfirmButton: false,
              timer: 6000,
              timerProgressBar: true,
            });
          }
          if (status === "success") {
            Swal.fire(msg);
            sessionStorage.setItem("token", token);
            setStore({
              token: token,
              currentUser: {
                username: username,
                email: email,
                picture: picture,
              },
            });
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      loadStyles: () => {
        fetch(
          "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/styles"
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
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      },

      loadPrices: () => {
        fetch(
          "https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu70.gitpod.io/api/prices/"
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
