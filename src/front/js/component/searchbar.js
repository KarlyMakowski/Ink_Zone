import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import "../../styles/searchBar.css"

export const Searchbar = () => {

  return (
    <form className="search">
      <input className="search-input" type="text" placeholder="Search" />
      <button className="search-btn" type="button">
        <RiSearch2Line />
      </button>
    </form>)
}