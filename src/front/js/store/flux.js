const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      styles: [],
    },
    actions: {
      loadStyles: () => {
        fetch(
          "https://3001-karlymakowski-inkzone-abvl63tks0i.ws-eu63.gitpod.io/api/styles"
        )
          .then((response) => response.json())
          .then((data) => setStore({ styles: data }));
      },
    },
  };
};

export default getState;
