"use client";
import Footer from "@/components/footer";
import InventoryNavbar from "@/components/navbar";
import React from "react";
import Hero from "./components/hero";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

type ValidSlug = "support" | "sales";

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;

  const isValidSlug = (value: string): value is ValidSlug =>
    ["support", "sales"].includes(value);

  if (!slug || !isValidSlug(slug)) {
    notFound();
  }

  return (
    <div className="w-full relative">
      <InventoryNavbar />
      <Hero type={slug} />
      <Footer />
    </div>
  );
}
