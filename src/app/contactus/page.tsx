import React from "react";
import Hero from "./components/hero";
import InventoryNavbar from "@/components/navbar";
import Contactdetails from "./components/contactdetails";
import Footer from "@/components/footer";

export default function page() {
  return (
    <div className="w-full relative">
      <InventoryNavbar />
      <Hero />
      <Contactdetails />
      <Footer />
    </div>
  );
}
