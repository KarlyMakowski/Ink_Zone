const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUser: {},
      logged: null,
      message: "",
      styles: [],
      prices: [],
    },

    actions: {
      signup: async (user) => {
        try {
          // fetching data from the backend
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-ui8hb86hdiz.ws-eu64.gitpod.io/api/signup",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(user),
            }
          );
          const data = await resp.json();
          const response = await data.created;
          if (response) {

            setStore({message: "Create successful"})
            localStorage.setItem("created", data.created)

          }
          else{
          setStore({message: data.msg})

          }
          //setStore({ message: data.message })
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      login: async (user) => {
        try {
          // fetching data from the backend
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-ui8hb86hdiz.ws-eu64.gitpod.io/api/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(user),
            }
          );
          const data = await resp.json();
          setStore({
            message: data.message,
            logged: data.logged,
            currentUser: data.user,
          });
          localStorage.setItem("token", data.token);
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
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

      changeUser: async (user) => {
        try {
          // fetching data from the backend
          const resp = await fetch(
            "https://3001-karlymakowski-inkzone-ui8hb86hdiz.ws-eu64.gitpod.io/api/user-profile",
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
          setStore({ currentUser: data.user });
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
