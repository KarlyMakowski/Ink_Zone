import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/signup-signin.css";

export const Roles = () => {
  const { store } = useContext(Context);

  return store.roles.map((singleRole, i) => {
    return (
          <option key={i} value="1" className="colour">{singleRole.name}</option>
      );
  })
};
