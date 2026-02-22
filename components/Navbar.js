import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_hallow.png";
import BookNow from "./buttons/BookNow";

// Placeholder code to start Navbar; can be changed
// TODO: Book Now button should be its own component
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4" style={{ background: "var(--color-navbar-bg)" }}>
      < Link href="/" > <Image src={logo} alt="Home" width={64} height={64} className="h-24 w-auto object-contain" /></Link >

      <div className="font-bold text-lg flex gap-8 items-center">
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <BookNow />
      </div>
    </nav >
  );
}
