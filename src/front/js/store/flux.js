import Swal from "sweetalert2";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      currentUser: null,
      experts: [],
      stylesPublish: [],
      multipleFiles: [],
      styles: [],
      privateStyle: [],
      addFav: false,
      favCount: 0,
      prices: [],
    },

    actions: {
      signup: async (e, navigate) => {
        e.preventDefault();
        const { username, email, password, confirmPassword, role } = getStore();

        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
              confirm_password: confirmPassword,
              role: role,
            }),
          });
          const { status, msg, created } = await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
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
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");

        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const { status, msg, user, token } = await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
            });
            setStore({ currentUser: user, token: token, role: user.role });
            sessionStorage.setItem("token", token);
            navigate("/profile");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      authGoogle: async (user) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/token/google",
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
                picture: user.photoURL,
              }),
            }
          );
          const { status, msg, token, username, email, picture } =
            await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
            });
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

      logout: (navigate) => {
        Swal.fire({
          title: "See you next time!",
          width: 720,
          padding: "5em",
          background: "transparent",
          backdrop: "rgba(32, 32, 32, 0.9)",
          icon: "success",
          iconColor: "#a091ff",
          color: "#a091ff",
          position: "center",
          animation: true,
          showConfirmButton: true,
          confirmButtonText: "Close",
          confirmButtonColor: "#a091ff",
          timer: 8000,
        });
        sessionStorage.removeItem("token");
        setStore({ token: null, currentUser: null, role: null });
        navigate("/");
      },

      loadProfile: async (e) => {
        e.preventDefault();
        const {
          role,
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
          const resp = await fetch(process.env.BACKEND_URL + "/api/private", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
            body: JSON.stringify({
              role: role,
              username: username,
              email: email,
              name: name,
              lastname: lastname,
              phonenumber: phonenumber,
              facebook: facebook,
              instagram: instagram,
              twitter: twitter,
            }),
          });
          const { status, msg, user } = await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
            });
            setStore({ currentUser: user });
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      uploadPicture: async (e) => {
        e.preventDefault();
        const { picture } = getStore();

        try {
          let formData = new FormData();
          formData.append("picture", picture);

          const resp = await fetch(
            process.env.BACKEND_URL + "/api/private/upload-picture",
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
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
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

      publishProfile: async (e, id) => {
        e.preventDefault();
        const {
          currentUser,
          stylesPublish,
          description,
          multipleFiles,
          facebook,
          instagram,
          twitter,
        } = getStore();
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/private/publish/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
              body: JSON.stringify({
                username: currentUser.username,
                picture: currentUser.picture,
                styles: stylesPublish,
                description: description,
                multipleFiles: multipleFiles,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
              }),
            }
          );
          const { created, status, msg, user } = await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
            });
            setStore({ created: created, currentUser: user });
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      passwordRecovery: async (e, navigate) => {
        e.preventDefault();
        const { email } = getStore();

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/password-recovery",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
              }),
            }
          );
          const { status, msg } = await resp.json();
          if (status === "failed") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "error",
              color: "#c61a09",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#c61a09",
              timer: 8000,
            });
          }
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
            });
            navigate("/sign-in");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      deleteProfile: async (navigate) => {
        try {
          fetch(process.env.BACKEND_URL + "/api/private", {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          });
          const { status, msg } = await resp.json();
          if (status === "success") {
            Swal.fire({
              title: msg,
              width: 720,
              padding: "5em",
              background: "transparent",
              backdrop: "rgba(32, 32, 32, 0.9)",
              icon: "success",
              color: "#aeffb9",
              position: "center",
              animation: true,
              showConfirmButton: true,
              confirmButtonText: "Close",
              confirmButtonColor: "#aeffb9",
              timer: 8000,
            });
            sessionStorage.removeItem("token", token);
            setStore({ token: null, currentUser: null });
            navigate("/");
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      loadStyles: () => {
        fetch(process.env.BACKEND_URL + "/api/styles")
          .then((response) => response.json())
          .then((data) => setStore({ styles: data }));
      },

      loadSingleStyle: (id) => {
        fetch(process.env.BACKEND_URL + `/api/styles/private/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ privateStyle: data }));
      },

      handleFav: (id) => {
        fetch(process.env.BACKEND_URL + `/api/styles/private/favourite/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ addFav: data.is_favourite, favCount: data.fav_counter });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      handleCount: (id) => {
        fetch(process.env.BACKEND_URL + `/api/styles/private/favourite/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ favCount: data.fav_counter, addFav: data.is_favourite });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      loadPrices: () => {
        fetch(process.env.BACKEND_URL + "/api/prices")
          .then((response) => response.json())
          .then((data) => setStore({ prices: data }));
      },

      loadExperts: () => {
        fetch(process.env.BACKEND_URL + "/api/experts", {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ experts: data }));
      },

      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          [name]: value,
        });
      },

      handleSelect: (e) => {
        const stringedStyles = Array.prototype.map
          .call(e, function (item) {
            return item.value;
          })
          .join(", ");
        setStore({ stylesPublish: stringedStyles });
      },

      handleSearch: (e) => {
        const store = getStore();
        const stringedStyles = Array.prototype.map
          .call(e, function (item) {
            return item.value;
          })
          .join(", ");
        setStore({ stylesPublish: stringedStyles });
        const search = store.experts.filter((item) =>
          item.styles.toLowerCase().includes(store.stylesPublish.toLowerCase())
        );
        setStore({ experts: search });
      },
    },
  };
};

export default getState;
