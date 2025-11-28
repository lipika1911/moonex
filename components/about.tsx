import { Check, DollarSign, PhoneOff, ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import ComparisonTable from "./comparison-table";
import Features from "./features";

const rows = [
  "1. Point no one",
  "2. Point no two this",
  "3. Point no three this",
  "4. Point no four this",
  "5. Point no five this",
];

const About = () => {
  return (
    <div id="about" className='px-8 py-8 flex flex-col mt-20'>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Features */}
      <Features />
    </div>
  )
}

export default About