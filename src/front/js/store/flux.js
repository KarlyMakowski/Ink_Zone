const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      email: "",
      password: "",
      confirmPassword:"",
      token: null,
      message: null,
      styles: [],
      prices: [],
    },

    actions: {

      signup: async (username, email, password, confirmPassword) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            confirm_password: confirmPassword
          }),
        };

        try {
          const resp = await fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu64.gitpod.io/api/signup", opts)
            const data = await resp.json();
            console.log("this came from the backend", data);
            const response = await data.created;
            if(response.created) {
              sessionStorage.setItem("created", data.created);
              setStore({message: data.msg}); 
              console.log(data)
            }
            else {
              setStore({message: data.msg})
            }
          }
          catch(error) {
            console.error("There has been an error during sign up!", error);
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
            alert("Check your email or password!");
            return false;
          } 

          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token});
          return true;
        }
        catch(error){
          console.error("There has been an error logging in!!", error)
        }
      },

      getMesssage: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token
          }
        }
        fetch("https://3001-karlymakowski-inkzone-zq7v7zda3xq.ws-eu64.gitpod.io/api/private", opts)
        .then(resp => resp.json())
        .then(data => setStore({ message: data.msg }))
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

      handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},
      
    },
  };
};

export default getState;
