import React from "react";
import Heading from "../components/Heading";
import Specials from "../components/Specials";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Heading />
      <HeroSection />
      <Specials />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}