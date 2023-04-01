import Carousel from './TestimonialCarousel'
import TestimonialCard from './TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Name Name" description="Occaecat tempor veniam irure nisi ipsum quis quis officia in pariatur tempor incididunt quis labore. Lorem officia cillum ex nulla ut et magna exercitation sint. Deserunt consequat consectetur est laborum id excepteur Lorem fugiat magna. Mollit cillum aliqua magna fugiat amet consequat nostrud duis irure duis excepteur. Officia id deserunt id dolore ad qui Lorem officia amet anim irure sint exercitation enim. Consectetur aute nulla ea amet ea non occaecat id aliquip consectetur laboris minim veniam proident. Veniam irure laborum in ut commodo ipsum."/>
                <TestimonialCard name="Name Name" description="Magna magna aute occaecat cupidatat aliqua cillum aliqua. Laborum consectetur reprehenderit dolor adipisicing irure velit do et et. Esse reprehenderit aute cupidatat duis anim mollit laborum culpa pariatur enim occaecat commodo aliquip."/>
                <TestimonialCard name="Name Name" description="Culpa dolore velit anim proident id. Laborum aliquip minim est voluptate aliqua eu in minim sit deserunt Lorem enim. Pariatur exercitation culpa eiusmod officia excepteur eu fugiat sint pariatur."/>
                <TestimonialCard name="Name Name" description="Veniam duis amet nulla consequat. Exercitation proident aute duis pariatur aliquip. Excepteur sit magna nisi nostrud qui tempor mollit velit magna magna nisi. Et officia aliquip laborum et anim non. Consequat ex deserunt sunt proident proident irure est duis cillum proident est fugiat commodo eu. Magna quis dolor ut ex duis cupidatat occaecat voluptate pariatur. Esse non mollit excepteur excepteur proident cupidatat in."/>
                <TestimonialCard name="Name Name" description="Est est cupidatat labore qui id incididunt mollit duis incididunt voluptate ad laboris ea officia. Irure ullamco est ad magna duis sunt pariatur voluptate esse incididunt labore dolore sunt. Est quis do laborum minim. Aliquip quis voluptate cillum occaecat deserunt fugiat excepteur in irure."/>
                <TestimonialCard name="Name Name" description="Irure irure sunt consequat eu fugiat quis quis in excepteur minim non aute. Eiusmod labore occaecat eu dolore in ipsum nisi aliqua sunt. Voluptate qui consectetur cillum velit ex non excepteur. Exercitation officia laboris eiusmod deserunt sunt pariatur ipsum enim sunt reprehenderit reprehenderit ea. Tempor magna Lorem aute non. Pariatur cillum laboris esse proident nisi occaecat minim."/>
                <TestimonialCard name="Name Name" description="Pariatur amet dolor nulla consectetur. Cillum et est aliquip dolor. Aliqua quis ex ad quis tempor ad et mollit anim. Sit qui id dolor sit sunt enim nostrud."/>
                <TestimonialCard name="Name Name" description="Enim laboris ullamco qui duis do minim pariatur enim eiusmod. Et elit aliquip ipsum incididunt nostrud adipisicing nostrud officia. Magna ipsum voluptate veniam dolore."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}