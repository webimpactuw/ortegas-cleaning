import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ServicesHero() {
  return (
    <div className="bg-[#2E4E65] py-16 flex flex-col items-center gap-4">
      <h1 className="font-[Playfair_Display] font-semibold text-5xl text-white text-center">
        Our Services
      </h1>
      <p className="text-white/70 text-lg text-center max-w-2xl font-[inter]">
        Professional cleaning solutions designed to meet your unique needs
      </p>
    </div>
  );
}
