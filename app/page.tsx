"use client"
import Brands from "@/components/brands";
import DetailsSection from "@/components/details";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HorizontalSection from "@/components/horizontal-scroll/horizontal-section";
import Navbar from "@/components/navbar";
import ToolsSection from "@/components/tools-section";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      {/* <Navbar /> */}
      <Hero />
      <DetailsSection />
      <HorizontalSection />
      <ToolsSection />
      <Brands />
      <Footer />
    </div>
    
  );
}
