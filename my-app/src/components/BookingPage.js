import React from 'react';
import "./styles/Booking.css";
import Form from './Form';


function BookingPage() {

  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Heading2</h2>
          <p>Consequat quis deserunt culpa eiusmod enim incididunt laborum irure eiusmod nostrud.<em>tradition</em>.</p>
          <p>Pariatur consequat voluptate velit aute dolor anim reprehenderit qui sint.</p>
        </div>
        <div className="form">
          <h1>Book a Table</h1>
          <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
          <Form />
        </div>
      </div>
    </div>
  );
}
export default BookingPage
