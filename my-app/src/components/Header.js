import { useState } from "react";
import React from "react";
import logo from '../assets/logo.png';
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen);
    }
    return (
        <nav>
            <nav className="burger">
                <img className="nav-image" src={logo} alt="Little Lemon logo" />
                <button className="burger-icon" onClick={handleToggle}>
                    <img src={navbarOpen ? Close : Hamburger} alt="Navigation" />
                </button>
            </nav>
            <Navigation device="desktop" />
            {navbarOpen ? <Navigation device="mobile" /> : ""}
        </nav>
    );
}
export default Header;