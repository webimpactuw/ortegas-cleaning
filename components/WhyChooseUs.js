export default function WhyChooseUs() {
  return (
    <section className="bg-linear-to-b from-[#EFF6FF] to-[#F9EBDC] relative py-10 px-6 md:px-16 pb-20 overflow-hidden">

      <div className="bg-linear-to-r from-[#EFF6FF] to-[#FFFFFF] max-w-5xl mx-auto border border-blue-200 rounded-2xl p-10 relative z-10 shadow-md">
        <h2 className="font-[Playfair_Display] text-3xl font-bold text-[#2E4E65] text-center mb-8">
          Why Choose Ortega&apos;s?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Trusted Professionals */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-white shadow-sm">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 text-[#2E4E65] font-semibold text-lg font-[inter]">
              ✓
            </div>
            <h3 className="font-[Playfair_Display] font-semibold text-[#2E4E65] text-base">Trusted Professionals</h3>
            <p className="text-[#4A4A4ACC] font-[inter] text-sm leading-5">Background-checked, trained team members you can trust in your space</p>
          </div>

          {/* Quality Guaranteed */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-white shadow-sm">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 text-[#2E4E65] font-semibold text-lg font-[inter]">
              ★
            </div>
            <h3 className="font-[Playfair_Display] font-semibold text-[#2E4E65] text-base">Quality Guaranteed</h3>
            <p className="text-[#4A4A4ACC] font-[inter] text-sm leading-5">Not satisfied? We&apos;ll re-clean at no extra charge</p>
          </div>

          {/* Eco-Friendly */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-white shadow-sm">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 text-[#2E4E65] font-semibold text-lg font-[inter] text-green-600">
              ♻
            </div>
            <h3 className="font-[Playfair_Display] font-semibold text-[#2E4E65] text-base">Eco-Friendly</h3>
            <p className="text-[#4A4A4ACC] font-[inter] text-sm leading-5">Safe, non-toxic cleaning products for your family and pets</p>
          </div>

        </div>
      </div>
    </section>
  );
}
