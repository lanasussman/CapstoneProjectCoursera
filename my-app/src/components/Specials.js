import Carousel from './SpecialsCarousel';
import GreekSalad from '../assets/greekSalad.jpg';
import Bruschetta from '../assets/bruschetta.jpeg';
import LemonDessert from '../assets/lemon-dessert.webp';
import SpecialCard from './SpecialsCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button"  target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Consectetur ipsum nisi ullamco excepteur tempor cillum deserunt voluptate officia elit do excepteur consequat. Fugiat do tempor labore consectetur. Et eiusmod ad sit sit aute dolore. Adipisicing non voluptate officia esse dolor exercitation quis duis. Sint Lorem in laborum qui proident dolore est pariatur do aliquip laboris fugiat laborum eiusmod. Cillum veniam consequat aute fugiat excepteur ex et exercitation. Ipsum elit occaecat voluptate sit non culpa Lorem eu dolor eiusmod veniam."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Laboris aute amet est anim sint tempor irure officia aliqua ullamco esse. Minim esse cillum ea occaecat incididunt in. Et quis aliqua adipisicing esse aliquip sint aute eu. Ullamco in qui ea occaecat fugiat culpa incididunt laboris. Occaecat dolore quis eiusmod consectetur id reprehenderit occaecat."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Sit id aute labore mollit amet anim deserunt labore magna Lorem magna eu cillum eu. Esse adipisicing mollit adipisicing amet quis amet eu elit et. Laborum fugiat veniam mollit esse amet fugiat do culpa cupidatat deserunt consequat consequat mollit. Ea cupidatat irure nisi exercitation fugiat."/>
            </section>

            <section className="specials-carousel">
                <section />
            </section>
        </section>
    );
}