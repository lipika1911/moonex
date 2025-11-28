import React from 'react'

const Hero = () => {
  return (
    <div
      className="
        flex flex-col-reverse lg:flex-row
        items-center justify-center
        px-6 md:px-12 lg:px-20
        lg:py-30
        mx-auto gap-10 lg:gap-30
        text-center lg:text-left
      "
    >

      {/* main hero content */}
      <div className="flex flex-col items-center lg:items-start max-w-xl lg:max-w-7xl px-2">

        {/* hero text */}
        <h2
          className="
            font-neue 
            text-4xl md:text-5xl lg:text-7xl 
            text-foreground font-extrabold 
            mt-10 lg:mt-20
          "
        >
          Trusted Multi-Chain <span className="text-primary">DEX</span> Platform
        </h2>

        <p
          className="
            text-white/70 
            text-lg md:text-xl lg:text-2xl
            tracking-wider 
            mt-4
            max-w-md
          "
        >
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>

        {/* cta buttons */}
        <div className="flex flex-row mt-8 gap-4">
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

          <button
            className="
              px-6 py-3 
              rounded-full 
              font-bold 
              text-primary 
              border border-primary
            "
          >
            Trade Crypto
          </button>
        </div>

      </div>

      {/* yellow circle */}
      <div className="flex justify-center items-center mt-10 lg:mt-0">
        <div
          className="
            w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64
            rounded-full
            bg-linear-to-r 
            from-[#EDD955]
            to-[#E4B40D]
          "
        ></div>
      </div>

    </div>
  )
}

export default Hero
