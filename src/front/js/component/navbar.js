import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHome, FaPaintBrush, FaQuestion, FaTeamspeak } from "react-icons/fa";
import { IoMdContacts, IoMdMenu, IoMdClose } from "react-icons/io";
import { GiDeathZone } from "react-icons/gi";

import "../../styles/navbar.css";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const activateNav = () => {
        setActive(!active);
    };

    return (
        <div className={active ? "header" : "header-mobile"}>
            <div className="menu-icon" onClick={activateNav}>

                {!active ? <IoMdMenu className="menu" /> : <IoMdClose className="menu" />}

            </div>
            <nav className="sidebar">
                <ul className={active ? "ul-item" : "ul-item oicon"}>
                    <li>
                        <FaHome className="icon" />
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <IoMdContacts className="icon" />
                        <Link to="/experts">ask our experts</Link>
                    </li>
                    <li>
                        <FaPaintBrush className="icon" />
                        <Link to="/styles">find your style</Link>
                    </li>
                    <li>
                        <FaTeamspeak className="icon" />
                        <Link to="/contact-us">contact us</Link>
                    </li>
                    <li>
                        <FaQuestion className="icon" />
                        <Link to="/faq">faq</Link>
                    </li>
                    <li>
                        <GiDeathZone className="icon" />
                        <Link to="/sign-up">client zone</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
