import Link from "next/link";
import Image from "next/image";
import logo_hallow from "../public/logo_hallow.png";

// Placeholder code to start Navbar; can be changed
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <Link href="/"><Image src={logo_hallow} alt="Home" width={64} height={64} className="h-12 w-auto object-contain" /></Link>

      <div className="flex gap-4">
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/book">Book Now</Link>
      </div>
    </nav>
  );
}
