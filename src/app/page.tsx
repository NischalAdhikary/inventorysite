import React from "react";
import Hero from "../components/hero";
import Features from "../components/features";
import InventoryNavbar from "../components/navbar";
import Footer from "../components/footer";
import TestimonialsSection from "../components/testimonials";
// dsadsa
export default function Page() {
  return (
    <div className="w-full relative">
      <InventoryNavbar />
      <Hero />
      <Features />
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}
