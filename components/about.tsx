import { Check, DollarSign, PhoneOff, ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";

const rows = [
  "1. Point no one",
  "2. Point no two this",
  "3. Point no three this",
  "4. Point no four this",
  "5. Point no five this",
];

const About = () => {
  return (
    <div className='px-8 py-8 flex flex-col mt-20'>

      {/* Comparison Table */}
      <div className='flex flex-col'>
        <div className='flex flex-row items-start px-20'>
          <h3 className='font-neue text-5xl font-bold'>Why <span className='text-primary'>MoonEX</span> ?</h3>
        </div>
        <div className="overflow-x-auto mt-10 bg-white/2 rounded-3xl p-10 mx-10 font-neue">
          <table className="w-full border-collapse">
            
            {/* Header */}
            <thead>
              <tr className="border-b border-white/10 text-xl">
                <th className="py-4 px-12 border-r border-white/10 text-center text-3xl tracking-widest text-primary">
                  Comparison
                </th>
                <th className="py-4 px-20 text-primary border-r border-white/10 text-center text-3xl">
                  <div className="flex flex-col items-center">
                    <Image 
                      src="/moonex.svg" 
                      alt="Moonex Logo" 
                      width={300} 
                      height={300} 
                    />
                  </div>
                </th>
                <th className="py-4 px-20 text-center text-3xl">
                  <div className="flex flex-col items-center">
                    <Image 
                      src="/uniswap.svg" 
                      alt="Moonex Logo" 
                      width={200} 
                      height={200} 
                    />
                  </div>
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-lg">
              {rows.map((text, index) => (
                <tr 
                  key={index} 
                  className="border-b border-white/10 text-xl text-white/70"
                >
                  <td className="py-8 px-10 border-r border-white/10 text-left">
                    {text}
                  </td>

                  <td className="py-4 px-10 text-green-400 border-r border-white/10 text-center">
                    <div className="flex items-center justify-center">
                      <Check />
                    </div>
                  </td>

                  <td className="py-4 px-10 text-red-500 text-center">
                    <div className="flex items-center justify-center font-bold">
                      <X />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 mx-10">
        <h3 className="text-5xl font-neue font-bold m-8 text-center">Our <span className="text-primary">Features</span></h3>
        <div className="flex flex-row gap-10">
          <div className="w-72 flex flex-col items-start bg-white/2 p-6 rounded-2xl border border-white/10" >
            <div className="rounded-full bg-white/10 p-4 mb-8">
              <DollarSign size={36}/>
            </div>
            <h4 className="text-xl text-foreground font-semibold mb-4">Cheapest TXs</h4>
            <p className="text-md">
              Exchange popular digital currencies at the cheapest possible transaction price
            </p>
          </div>
          <div className="w-72 flex flex-col items-start bg-white/2 p-6 rounded-2xl border border-white/10" >
            <div className="rounded-full bg-white/10 p-4 mb-8">
              <ShieldCheck size={36}/>
            </div>
            <h4 className="text-xl text-foreground font-semibold mb-4">CerTIK</h4>
            <p className="text-md">
              We are audited by Certik. Certik is the leading security-focused ranking platform to
            </p>
          </div>
          <div className="w-72 flex flex-col items-start bg-white/2 p-6 rounded-2xl border border-white/10" >
            <div className="rounded-full bg-white/10 p-4 mb-8">
              <PhoneOff size={36}/>
            </div>
            <h4 className="text-xl text-foreground font-semibold mb-4">No Contract Sells</h4>
            <p className="text-md">
              No contract sells to fund the marketing wallets
            </p>
          </div>
          <div className="w-72 flex flex-col items-start bg-white/2 p-6 rounded-2xl border border-white/10" >
            <div className="rounded-full bg-white/10 p-4 mb-8">
              <SlidersHorizontal size={36}/>
            </div>
            <h4 className="text-xl text-foreground font-semibold mb-4">CrossDex Support</h4>
            <p className="text-md">
              Exchange popular digital currencies at the cheapest possible transaction price
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About