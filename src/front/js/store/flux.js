const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      styles: [],
      prices: [],
      currentuser: {},
      logged: null,
      message: "",
    },

    actions: {
      signup: async (user) => {
        try {
          // fetching data from the backend
          const resp = await fetch("https://ink-zone.herokuapp.com/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          const data = await resp.json();
          const response = data.created;
          if (response) {
            setStore({message: "Create successful"})
          }
          else{
          setStore({message: "User not created"})
          }
          //setStore({ message: data.message })
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
    
      login: async (user) => {
        try {
          // fetching data from the backend
          const resp = await fetch("https://ink-zone.herokuapp.com/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          const data = await resp.json();
          setStore({ message: data.message, logged: data.logged, currentuser: data.user })
          localStorage.setItem("token", data.token) 
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
