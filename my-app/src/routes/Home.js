import Heading from "../components/HeadingSection";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/AboutSection";

export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}