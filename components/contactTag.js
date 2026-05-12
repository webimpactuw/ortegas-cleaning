
import Image from "next/image";
import phone_icon from "../public/phone_icon.png";
import email_icon from "../public/email_icon.png";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function ContactTag(){
    return (
        <div className="flex gap-2 pt-4">
            <Image src={phone_icon} alt="PHONE" className=""></Image>
            <p className="font-[inter] text-gray-500">
                (xxx) xxx-xxxx
            </p>
            <p className="font-[inter] text-gray-300">
                |
            </p>
            <Image src={email_icon} alt="EMAIL" className=""></Image>
            <p className="font-[inter] text-gray-500">
                xxxx@gmail.com
            </p>

        </div>
    )
}