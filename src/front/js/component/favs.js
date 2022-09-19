import React from "react";

import "../../styles/favs.css";

import { FaHeart } from "react-icons/fa";

export const Favs = ({id}) => {

    const handleClick = () => {
        alert("Fav added")
    }

    return (
        <button className="add-fav" onClick={handleClick}>
            <span aria-label="Fav Style" role="img"><FaHeart /></span>
        </button>
    );
}