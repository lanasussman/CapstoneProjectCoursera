import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Reservation from "./BookingPage";
import Order from "./Order";
import Login from "./Login";
import Confirmation from "./Confirmation";

function MainRouting() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    )
}
export default MainRouting;