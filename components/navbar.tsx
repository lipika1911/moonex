"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-12 lg:px-20 lg:py-10 flex justify-between items-center mx-auto">

      {/* Logo */}
      <div className="flex flex-row gap-4 items-center">
        <Image
          src="/logo.svg"
          alt="Moonex Logo"
          width={60}
          height={60}
          className="w-12 h-12 md:w-[60px] md:h-[60px]"
        />

        <h1 className="font-neue bg-linear-to-r from-[#EDD955] to-[#E4B40d] bg-clip-text text-transparent 
          text-2xl md:text-3xl font-semibold tracking-widest">
          Moonex
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 lg:gap-20 text-lg font-bold text-foreground">
        <a href="#home" className="hover:text-primary">Home</a>
        <a href="#about" className="hover:text-primary">About Us</a>
        <a href="#roadmap" className="hover:text-primary">Roadmap</a>
        <a href="#faq" className="hover:text-primary">FAQs</a>
        <a href="#footer" className="hover:text-primary">Contact Us</a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button
          className="
            px-6 py-3 
            rounded-full 
            font-bold
            bg-linear-to-r from-[#E4B40D] to-[#FDE48A]
            text-background
            transition-all duration-300
            hover:opacity-90
          "
        >
          Connect Wallet
        </button>
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md py-6 flex flex-col gap-6 text-center text-lg font-semibold md:hidden">

          <a href="#home" className="hover:text-primary" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#about" className="hover:text-primary" onClick={() => setOpen(false)}>
            About Us
          </a>

          <a href="#roadmap" className="hover:text-primary" onClick={() => setOpen(false)}>
            Roadmap
          </a>

          <a href="#faq" className="hover:text-primary" onClick={() => setOpen(false)}>
            FAQs
          </a>

          <a href="#footer" className="hover:text-primary" onClick={() => setOpen(false)}>
            Contact Us
          </a>

          <button
            className="
              mt-4 mx-auto w-48
              px-6 py-3 rounded-full font-bold
              bg-linear-to-r from-[#E4B40D] to-[#FDE48A]
              text-background transition-all duration-300 hover:opacity-90
            "
          >
            Connect Wallet
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
