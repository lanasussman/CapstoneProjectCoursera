import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">lorem ipsumDolore ullamco pariatur eu occaecat ullamco amet esse aliqua ipsum amet duis id aliqua. Eiusmod dolor esse proident nulla nostrud aliqua dolore quis anim proident officia aliquip labore pariatur. Laborum duis elit consequat excepteur laboris cillum aute reprehenderit consectetur ex tempor eiusmod. Quis eu do commodo aute veniam.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img alt="photo"></img>
                </section>
            </article>
      </header>
    );
}