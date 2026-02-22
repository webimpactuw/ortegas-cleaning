import Link from "next/link";
import Image from "next/image";
import hero_icon from "../public/hero_icon.png";

export default function Hero() {
    return (
        <div className="flex flex-col items-center">

            <Image src={hero_icon} alt="ortega's cleaning logo"></Image>

            <div>
                Delivering detailed, reliable residential and commercial 
                cleaning services across King County
            </div>

            <Link href="/contact">Get Your Free Quote</Link>
        </div>
    );
}