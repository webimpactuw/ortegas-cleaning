import Link from "next/link";

// Placeholder code to start Navbar; can be changed
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Sparkle Clean</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
