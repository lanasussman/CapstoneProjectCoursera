import React from "react";
import logo from '../assets/logo.png';

function Navigation() {
    return (
        <menu className="navbar-menu">
            <img className="nav-image" src={logo} alt="Little Lemon logo" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </menu>
    );
}
export default Navigation;