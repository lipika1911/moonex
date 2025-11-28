import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full py-8 px-20 flex justify-between items-center mx-auto">

      {/* Logo */}
      <div className='flex flex-row gap-4 items-center'>
        <Image 
          src="/logo.svg" 
          alt="Moonex Logo" 
          width={78} 
          height={78} 
        />
        <h1 className='font-neue bg-linear-to-r from-[#EDD955] to-[#E4B40d] 
        bg-clip-text text-transparent text-2xl font-stretch-ultra-expanded font-semibold traching-widest'>
          Moonex
        </h1>
      </div>

      {/* nav links */}
      <div className="flex gap-20 text-lg font-bold text-foreground">
        <a href="#" className="hover:text-primary">Home</a>
        <a href="#about" className="hover:text-primary transition">About Us</a>
        <a href="#" className="hover:text-primary transition">Roadmap</a>
        <a href="#faq" className="hover:text-primary transition">FAQs</a>
        <a href="#footer" className="hover:text-primary transition">Contact Us</a>
      </div>

      {/* cta button */}
      <div>
        <button
          className="
            px-6 py-3 
            rounded-full 
            font-bold 
            bg-linear-to-r from-[#E4B40D] to-[#FDE48A]
            text-background
            transition-all duration-300
          "
        >
          Connect Wallet
        </button>
      </div>

    </nav>
  )
}

export default Navbar