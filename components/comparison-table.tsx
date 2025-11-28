import { Check, X } from "lucide-react";
import Image from "next/image";

const rows = [
  "1. Point no one",
  "2. Point no two this",
  "3. Point no three this",
  "4. Point no four this",
  "5. Point no five this",
];

const ComparisonTable = () => {
  return (
    <div className='flex flex-col'>
        
        <div className='flex flex-row items-start px-20'>
          <h3 className='font-neue text-5xl font-bold'>Why <span className='text-primary'>MoonEX</span> ?</h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-10 bg-white/2 rounded-3xl p-10 mx-10 font-neue">
          <table className="w-full border-collapse">
            
            {/* Table Header */}
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
  )
}

export default ComparisonTable