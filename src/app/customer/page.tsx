import InventoryNavbar from "@/components/navbar";
import React from "react";
import Hero from "./components/hero";
import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonials";
import { Aclonica } from "next/font/google";
import According from "@/components/according";

export default function page() {
  return (
    <div className="w-full relative">
      <InventoryNavbar />
      <Hero />
      <TestimonialCard />
      <According />
      <Footer />
    </div>
  );
}
