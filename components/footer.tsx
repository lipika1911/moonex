import Image from 'next/image'
import { FaRedditAlien, FaTelegram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer
      id="footer"
      className="
        bg-[#071624] 
        px-6 sm:px-10 lg:px-20 
        py-16 lg:py-20 
        mt-20
      "
    >
      <div
        className="
          flex flex-col 
          lg:flex-row 
          justify-between 
          gap-12 lg:gap-0 
          items-center lg:items-start
          text-center lg:text-left
        "
      >

        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <Image 
            src="/footer-logo.svg" 
            alt="Moonex Logo" 
            width={150} 
            height={150} 
            className="w-32 lg:w-40"
          />
        </div>

        {/* Nav Links */}
        <div
          className="
            flex flex-col sm:flex-row 
            gap-4 sm:gap-8 lg:gap-20 
            text-lg font-bold text-foreground
          "
        >
          <a href="#about" className="hover:text-primary transition">About Us</a>
          <a href="#roadmap" className="hover:text-primary transition">Roadmap</a>
          <a href="#faq" className="hover:text-primary transition">FAQs</a>
          <a href="#footer" className="hover:text-primary transition">Contact Us</a>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center lg:items-end justify-center gap-5">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Contact <span className="text-primary">Us</span>
          </h3>

          {/* Social Icons */}
          <div className="text-3xl sm:text-4xl flex flex-row gap-6 sm:gap-8">
            <FaTelegram className="hover:text-primary transition" />
            <FaRedditAlien className="hover:text-primary transition" />
            <FaTwitter className="hover:text-primary transition" />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
