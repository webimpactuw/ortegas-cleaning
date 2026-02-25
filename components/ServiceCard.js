import Image from "next/image";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ServiceCard({ icon, title, description, features, borderColor }) {
  return (
    <div className={`w-[560px] h-[478px] opacity-100 rounded-xl border ${borderColor} shadow-md shadow-lg mx-3 bg-white`}>
      <div className="flex justify-center items-center w-16 h-16 mt-12 ml-8 rounded-xl bg-[#D4E2ED66]">
        <Image src={icon} alt={title}/>
      </div>
      <h5 className="font-[Playfair_Display] font-semibold text-3xl leading-8 tracking-normal text-[#4A6B8A] ml-8 mt-8">{title}</h5>
      <p className="w-[458px] h-12 mt-3 ml-8 opacity-100 font-[inter] font-normal text-lg leading-6 tracking-normal text-[#4A4A4AB2]">{description}</p>
      <ul className="w-[496px] h-[148px] mt-8 ml-12 gap-3 font-[inter] font-normal text-lg leading-6 tracking-normal text-[#4A4A4ACC] list-disc marker:text-[#4A6B8A]">
        {features.map((feature, idx) => (
          <li key={idx} className={idx < features.length - 1 ? "mb-5" : ""}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}