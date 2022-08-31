import React from "react";

import "../../styles/searchBar.css";

import { RiSearch2Line } from "react-icons/ri";

export const Searchbar = () => {
  return (
    <form className="search">
      <input className="search-input" type="text" placeholder="Search" />
      <button className="search-btn" type="button">
        <RiSearch2Line />
      </button>
    </form>
  );
};
