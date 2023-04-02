import React from 'react';
import '../components/styles/Specials.css';
import SpecialsCard from './SpecialsCard';

export default function Specials() {
    return (
        <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week's Specials</h1>
            <div className="btn-container">
                <button className="btn btn-menu">Menu</button>
            </div>
      </div>
      <SpecialsCard />
    </div>
    );
}