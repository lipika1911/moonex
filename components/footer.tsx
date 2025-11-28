import Image from 'next/image'
import React from 'react'
import { FaRedditAlien, FaTelegram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-[#071624] px-20 py-20'>
      <div className='flex flex-row justify-between items-center' >

        {/* Logo */}
        <div>
          <Image 
            src="/footer-logo.svg" 
            alt="Moonex Logo" 
            width={150} 
            height={150} 
          />
        </div>

        {/* Nav Links */}
        <div className="flex gap-20 text-lg font-bold text-foreground">
          <a href="#about" className="hover:text-primary transition">About Us</a>
          <a href="#" className="hover:text-primary transition">Roadmap</a>
          <a href="#faq" className="hover:text-primary transition">FAQs</a>
          <a href="#footer" className="hover:text-primary transition">Contact Us</a>
        </div>

        {/* Contact Us */}
        <div className='flex flex-col items-center justify-center gap-5'>
          <h3 className='text-3xl font-bold'>Contact <span className='text-primary'>Us</span></h3>

          {/* Social Links */}
          <div className='text-4xl flex flex-row gap-8'>
            <FaTelegram />
            <FaRedditAlien/>
            <FaTwitter />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer