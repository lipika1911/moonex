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
    <div className="flex flex-col w-full">

      {/* Heading */}
      <div className="px-6 md:px-20">
        <h3 className="font-neue text-3xl md:text-5xl font-bold text-center md:text-left">
          Why <span className="text-primary">MoonEX</span>?
        </h3>
      </div>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto mt-10 bg-white/2 rounded-3xl p-4 md:p-10 mx-4 md:mx-10 font-neue">

        <table className="w-full border-collapse min-w-[600px] md:min-w-0">

          {/* TABLE HEADER */}
          <thead>
            <tr className="border-b border-white/10 text-base md:text-xl">

              {/* COMPARISON */}
              <th className="py-3 md:py-4 px-6 md:px-12 border-r border-white/10 
                text-center text-xl md:text-3xl tracking-widest text-primary"
              >
                Comparison
              </th>

              {/* MOONEX */}
              <th className="py-3 md:py-4 px-6 md:px-20 text-primary border-r border-white/10 
                text-center text-xl md:text-3xl"
              >
                <div className="flex flex-col items-center">
                  <Image 
                    src="/moonex.svg"
                    alt="Moonex Logo"
                    width={160}
                    height={160}
                    className="w-24 sm:w-34 md:w-60"
                  />
                </div>
              </th>

              {/* UNISWAP */}
              <th className="py-3 md:py-4 px-6 md:px-20 text-center text-xl md:text-3xl">
                <div className="flex flex-col items-center">
                  <Image 
                    src="/uniswap.svg"
                    alt="Uniswap Logo"
                    width={140}
                    height={140}
                    className="w-20 sm:w-30 md:w-40"
                  />
                </div>
              </th>

            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="text-sm md:text-lg">

            {rows.map((text, index) => (
              <tr 
                key={index}
                className="border-b border-white/10 text-white/70"
              >

                {/* DESCRIPTION */}
                <td className="py-6 md:py-8 px-4 md:px-10 border-r border-white/10 text-left">
                  {text}
                </td>

                {/* CHECK */}
                <td className="py-4 px-6 md:px-10 text-green-400 border-r border-white/10 text-center">
                  <div className="flex items-center justify-center">
                    <Check size={20} className="md:size-10" />
                  </div>
                </td>

                {/* CROSS */}
                <td className="py-4 px-6 md:px-10 text-red-500 text-center">
                  <div className="flex items-center justify-center font-bold">
                    <X size={20} className="md:size-10" />
                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
