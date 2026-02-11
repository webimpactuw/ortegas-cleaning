import Link from "next/link";
import Image from "next/image";
import logo_hallow from "../public/logo_hallow.png";

// Placeholder code to start Navbar; can be changed
// TODO: Book Now button should be its own component
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 pr-8 border-b bg-[#e6e7eb]">
      <Link href="/"><Image src={logo_hallow} alt="Home" width={64} height={64} className="h-14 w-auto object-contain" /></Link>

      <div className="flex gap-8 items-center text-[#224a60] text-[1.2rem]">
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/book" className="rounded-[8px] text-white px-6 py-2 bg-[#224a60]">Book Now</Link>
      </div>
    </nav>
  );
}
