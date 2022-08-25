import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";
import { FaUserAlt, FaPaintBrush, FaQuestion, FaListAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { IoMdContacts, IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { GiDeathZone } from "react-icons/gi";

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
            <nav>
                <ul className={active ? "ul-item" : "ul-item oicon"}>
                    <li>
                        <FaUserAlt className="icon" />
                        <Link to="/experts">ask our experts</Link>
                    </li>
                    <li>
                        <FaPaintBrush className="icon" />
                        <Link to="/styles">find your style</Link>
                    </li>
                    <li>
                        <BsCashCoin className="icon" />
                        <Link to="/prices">prices</Link>
                    </li>
                    <li>
                        <IoMdContacts className="icon" />
                        <Link to="/contact-us">contact us</Link>
                    </li>
                    <li>
                        <FaListAlt className="icon" />
                        <Link to="/questionary">questionary</Link>
                    </li>
                    <li>
                        <GiDeathZone className="icon" />
                        <Link to="/sign-up">client zone</Link>
                    </li>
                    <li>
                        <MdOutlineRateReview className="icon" />
                        <Link to="/reviews">reviews</Link>
                    </li>
                    <li>
                        <FaQuestion className="icon" />
                        <Link to="/faq">faq</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
