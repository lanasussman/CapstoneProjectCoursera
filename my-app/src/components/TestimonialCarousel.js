import React from 'react';

import TestimonialCard from './TestimonialCard';
export default function Carousel() {
    return (
        <section infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Name Name" description="Culpa ut cillum nisi sunt do reprehenderit dolore quis ea magna. Laboris veniam eiusmod sit magna ipsum. Id officia commodo minim tempor mollit elit tempor officia cupidatat nisi commodo ullamco eiusmod. Irure do aliqua veniam aute aliquip ut id aliquip sit dolore cupidatat esse. Labore labore esse mollit elit mollit." />
            <TestimonialCard name="Name Name" description="Culpa laborum incididunt esse deserunt mollit labore consectetur velit nulla ullamco elit amet eiusmod eiusmod. Enim adipisicing quis velit nisi deserunt commodo est labore consequat. Irure do sit adipisicing Lorem proident aliquip occaecat ullamco elit. Occaecat aute qui id occaecat quis adipisicing est eu anim incididunt. Aliqua exercitation magna do sunt." />
            <TestimonialCard name="Name Name" description="Excepteur sit dolor culpa id reprehenderit veniam consectetur et est ad eu magna sunt. Excepteur pariatur nulla elit adipisicing consequat do aliqua duis exercitation Lorem cupidatat laborum cupidatat ipsum. Nulla est consectetur aliquip sint do." />
            <TestimonialCard name="Name Name" description="Tempor exercitation aute velit id. Eu ad cillum laborum est duis ut nulla. Veniam ad ullamco esse elit eiusmod veniam duis amet. Et qui non esse officia. Nulla laboris dolore ad elit aliqua dolore proident." />
            <TestimonialCard name="Name Name" description="Occaecat aute esse eu eiusmod id duis officia consectetur elit ipsum veniam quis laboris cillum. Incididunt officia sint qui ad qui aute dolor. Veniam aliqua incididunt mollit Lorem velit voluptate consequat ipsum cillum. Et non adipisicing aliqua deserunt." />
            <TestimonialCard name="Name Name" description="Ipsum culpa dolor nulla occaecat exercitation deserunt. Minim ullamco id in enim. Deserunt duis elit dolore quis labore incididunt reprehenderit ea et excepteur. Enim mollit id proident magna esse. Exercitation do aliqua exercitation eu deserunt proident enim officia veniam reprehenderit laborum labore. Quis quis ad ipsum pariatur quis dolor enim dolor. Ut ea aliqua sit ea Lorem veniam quis Lorem." />
            <TestimonialCard name="Name Name" description="Eiusmod enim consectetur aute culpa adipisicing irure in nisi aute ullamco. Esse culpa nulla veniam eu do aliqua esse nostrud sint. Fugiat officia Lorem labore eiusmod adipisicing commodo minim. Exercitation ad aliquip adipisicing culpa officia irure excepteur aliquip officia Lorem." />
            <TestimonialCard name="Name Name" description="Fugiat nisi eu aliquip ex fugiat aliqua ut cillum magna. Proident culpa in ullamco deserunt est dolor labore sint culpa ea magna. Aute reprehenderit eiusmod minim pariatur. Veniam dolor sint consectetur amet cupidatat dolore id proident in." />
        </section>
    )
}