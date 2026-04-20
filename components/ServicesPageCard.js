export default function ServicesPageCard({ iconNode, title, badge, description, features }) {
  return (
    <div className={`relative rounded-2xl border shadow-sm bg-white px-8 pt-10 pb-8 flex flex-col gap-3 ${badge ? "border-[#BEA491] border-3" : "border-gray-200"}`}>
      {badge && (
        <span className="absolute -top-[1px] -right-[1px] -translate-y-[0%] bg-[#BEA491] text-white text-sm px-5 py-2 rounded-2xl font-[inter] font-medium whitespace-nowrap">
          {badge}
        </span>
      )}
      <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[#F0F5F8]">
        {iconNode}
      </div>
      <h3 className="font-[Playfair_Display] font-semibold text-2xl text-[#2E4E65] mt-1">{title}</h3>
      <p className="text-[#4A4A4A99] font-[inter] text-sm">{description}</p>
      <ul className="list-disc ml-5 marker:text-custom-blue marker:text-xl flex flex-col gap-1.5 text-[#4A4A4ACC] font-[inter] text-sm mt-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
