import { DollarSign, PhoneOff, ShieldCheck, SlidersHorizontal } from "lucide-react";

export const featuresData = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description: "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: ShieldCheck,
    title: "CerTIK",
    description: "We are audited by Certik. Certik is the leading security-focused ranking platform",
  },
  {
    icon: PhoneOff,
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
  },
  {
    icon: SlidersHorizontal,
    title: "CrossDex Support",
    description: "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

const Features = () => {
  return (
    <div className="mt-10 mx-4 sm:mx-6 md:mx-10">
      <h3 className="text-3xl md:text-5xl font-neue font-bold mb-12 text-center">
        Our <span className="text-primary">Features</span>
      </h3>

      {/* RESPONSIVE GRID */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6 
          md:gap-10
          place-items-center
        "
      >
        {featuresData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                w-full max-w-[300px]
                h-80
                flex flex-col items-start 
                bg-white/2 p-6 
                rounded-2xl 
                border border-white/10
                hover:bg-white/5 
                transition 
              "
            >
              <div className="rounded-full bg-white/10 p-4 mb-8">
                <Icon size={36} />
              </div>

              <h4 className="text-xl text-foreground font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-md text-white/70">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
