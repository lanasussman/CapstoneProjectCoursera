import Heading from "./HeadingSection";
import Specials from "./SpecialsSection";
import Testimonials from "./Testimonials";
import About from "./AboutSection";

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