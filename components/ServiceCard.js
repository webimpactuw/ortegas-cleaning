import Image from "next/image";

export default function ServiceCard({ icon, title, description, features, borderColor }) {
  return (
    <div className={`w-[560px] h-[478px] opacity-100 rounded-[16px] border-[1.67px] [column-span:1] bg-white ${borderColor} [box-shadow:0px_4px_6px_-4px_#0000001A] [box-shadow:0px_10px_15px_-3px_#0000001A] mx-3`}>
      <div className="flex justify-center items-center w-[64px] h-[64px] mt-[49px] ml-[34px] rounded-[16px] pl-0 opacity-100 bg-[#D4E2ED66]">
        <Image src={icon} alt={title}/>
      </div>
      <h5 className="font-[Playfair_Display] font-semibold text-[36px] leading-[32px] tracking-[0px] text-[#4A6B8A] ml-[34px] mt-[33px]">{title}</h5>
      <p className="w-[458px] h-[48px] mt-[13px] ml-[34px] opacity-100 font-[inter] font-normal text-[20px] leading-[24px] tracking-[0px] text-[#4A4A4AB2]">{description}</p>
      <ul className="w-[496px] h-[148px] mt-[30px] ml-[52px] gap-[12px] opacity-100 font-[inter] font-normal text-[20px] leading-[24px] tracking-[0px] text-[#4A4A4ACC] list-disc marker:text-[#4A6B8A]">
        {features.map((feature, idx) => (
          <li key={idx} className={idx < features.length - 1 ? "mb-[20px]" : ""}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}