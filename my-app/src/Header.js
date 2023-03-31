import React from "react";
import logo from './logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" />
            <h1>
                Homepage
            </h1>
        </header>
    );
}
export default Header;