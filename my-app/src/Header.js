import React from "react";
import logo from './logo.png';

function Header() {
    return (
        <header className="header">
            <img className="nav-image" src={logo} alt="Little Lemon logo" />
            <nav className="navbar-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;