import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-150 flex flex-row items-center justify-center px-8 py-8 mx-10 gap-30'>
      <div className='flex flex-col items-start px-4'>
        <div className='flex flex-col items-start'>
          <h2 className='font-neue text-7xl text-foreground font-extrabold mt-20'>
            Trusted Multi-Chain <span className='text-primary'>DEX</span> Platform
          </h2>
          <p className='text-white/70 text-2xl tracking-wider font-stretch-50% mt-2'>
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
        </div>
        <div className="flex flex-row items-start mt-10 gap-4">
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
      <div className="flex justify-center items-center">
          <div
            className="
              w-64 h-64
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