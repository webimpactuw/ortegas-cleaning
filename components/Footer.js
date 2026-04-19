import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import Bubble from "./Bubble";
import FooterColumn from "./FooterColumn.js";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-6 md:px-12 py-10"
      style={{
        background: "linear-gradient(to right, var(--footer-gradient-start), var(--footer-gradient-end))",
      }}
    >
      <Bubble size={40} top="5%" left="15%" />
      <Bubble size={70} top="10%" left="33%" />
      <Bubble size={90} top="8%" left="52%" />
      <Bubble size={110} top="45%" left="55%" />
      <Bubble size={150} top="35%" right="-1%" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="flex justify-start items-start">
          <Image
            src={logo}
            alt="Ortega's House Cleaning Logo"
            width={48}
            height={48}
            className="h-24 w-auto object-contain"
          />
        </div>

        <FooterColumn title="Address">
          <p>123 St</p>
          <p>Auburn, Washington</p>
          <p>XXXXX</p>
        </FooterColumn>

        <FooterColumn title="Site Map">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
        </FooterColumn>

        <FooterColumn title="Contact">
          <a href="mailto:email@gmail.com">email@gmail.com</a>
          <a href="tel:0000000000">000 000-0000</a>
        </FooterColumn>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-sm text-gray-500 text-left md:text-right">
        <p>© 2026 Ortega&apos;s House Cleaning</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
