import Footer from "@/components/footer";
import InventoryNavbar from "@/components/navbar";
import React from "react";
import Hero from "./components/hero";
import According from "@/components/according";
import Features from "./components/features";

export default function page() {
  return (
    <div className="w-full relative">
      <InventoryNavbar />
      <Hero />
      <Features />
      <According />
      <Footer />
    </div>
  );
}
