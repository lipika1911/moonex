import { DollarSign, PhoneOff, ShieldCheck, SlidersHorizontal } from "lucide-react";

export const featuresData = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description: "Exchange popular digital currencies at the cheapest possible transaction price"
  },
  {
    icon: ShieldCheck,
    title: "CerTIK",
    description: "We are audited by Certik. Certik is the leading security-focused ranking platform"
  },
  {
    icon: PhoneOff,
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets"
  },
  {
    icon: SlidersHorizontal,
    title: "CrossDex Support",
    description: "Exchange popular digital currencies at the cheapest possible transaction price"
  }
];

const Features = () => {
  return (
    <div className="mt-10 mx-10">
      <h3 className="text-5xl font-neue font-bold m-8 text-center">
        Our <span className="text-primary">Features</span>
      </h3>

      <div className="flex flex-row gap-10">
        {featuresData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="w-72 flex flex-col items-start bg-white/2 p-6 rounded-2xl border border-white/10"
            >
              <div className="rounded-full bg-white/10 p-4 mb-8">
                <Icon size={36} />
              </div>

              <h4 className="text-xl text-foreground font-semibold mb-4">
                {item.title}
              </h4>

              <p className="text-md">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
