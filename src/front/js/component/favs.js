import React from "react";

import "../../styles/favs.css";

import { GiRoundStar } from "react-icons/gi";

export const Favs = ({id}) => {

    const handleClick = () => {
        alert("Fav added")
    }

    return (
        <button className="add-fav" onClick={handleClick}>
            <span aria-label="Fav Style" role="img"><GiRoundStar /></span>
        </button>
    );
}