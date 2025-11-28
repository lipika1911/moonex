import About from "@/components/about";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mx-8">
      <Hero />
      <About />
      <FAQ />
    </main>
  );
}
