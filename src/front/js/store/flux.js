const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      token: null,
      currentUser: {},
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
          const data = await resp.json();
          const response = await data.created;
          if (response) {
            localStorage.setItem("created", data.created);
            setStore({ message: data.msg });
            navigate("/sign-in");
          } else {
            setStore({ message: data.msg });
          }
        } catch (error) {
          console.error("Error loading message from backend", error);
        }
      },

      syncTokenFromSessionStore: () => {
        const token = localStorage.getItem("token");
        console.log(
          "Application just loaded, synching the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
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
          const data = await resp.json();
          setStore({
            message: data.msg,
            token: data.token,
            currentuser: data.user,
          });
          localStorage.setItem("token", data.token);
          navigate("/profile");
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
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(user),
            }
          );
          const data = await resp.json();
          setStore({ currentUser: data.user, message: data.msg });
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },  

      logout: () => {
        Notify.info("Successfully logged out");
        localStorage.removeItem("token");
        console.log("Login out");
        setStore({ token: null, currentUser: {} });
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
