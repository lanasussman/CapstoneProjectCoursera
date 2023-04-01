import React from 'react';

import GreekSalad from '../assets/greekSalad.jpg';
import Bruschetta from '../assets/bruschetta.jpeg';
import LemonDessert from '../assets/lemon-dessert.webp';
import SpecialCard from './SpecialCard';

export default function CarouselPage() {
    return (
        <section infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Sint eiusmod anim voluptate ex cupidatat minim quis mollit aute ad irure magna deserunt."/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Esse reprehenderit magna amet exercitation in reprehenderit minim eu mollit ad in sunt laborum commodo."/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Non consequat Lorem consectetur nulla culpa pariatur."/>
        </section>
    )
}