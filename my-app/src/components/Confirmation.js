import HeroImage from "../assets/greekSalad.jpg";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation has been sent to your email.</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Homepage
        </Link>
      </section>
    </header>
  );
}