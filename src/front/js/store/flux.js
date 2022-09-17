const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      styles: [],
      prices: [],
    },

    actions: {

      signup: async (username, email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          }),
        };

        try {
          const resp = await fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu64.gitpod.io/api/signup", opts)
            if (resp.status !== 200) {
              alert("There has been some error");
            return false;
            }
            const data = await resp.json();
            console.log("this came from the backend", data);
            const response = data.status;
            if(response) {
              setStore({message: "User succesfully created!"});
            }
            else {
              setStore({message: "User could not be created!"})
            }
          }
          catch (error) {
            console.error("There has been an error during sign up!");
          }
        },

      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log("Application just loaded, synching the session storage token");
        if (token && token != "" && token != undefined) setStore({ token: token });
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password
          }),
        };

        try {
          const resp = await fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu64.gitpod.io/api/token", opts)
          if (resp.status !== 200){
            alert("There has been some error");
            return false;
          } 

          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token});
          return true;
        }
        catch(error){
          console.error("There has been an error login in!")
        }
      },

      getMesssage: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token
          }
        }
        fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu64.gitpod.io/api/hello", opts)
        .then(resp => resp.json())
        .then(data => setStore({ message: data.message }))
        .catch(error => console.log("Error loading message from backend", error));
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Login out");
        setStore({ token: null });
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
    },
  };
};

export default getState;
