import Navbar from "@/components/Navbar";
import BookingLayout from "@/components/booking/BookingLayout";
import { ObjectID } from "mongodb"
import Image from "next/image";
import hero_icon from "../../../public/hero_icon.png";
import { Inter } from 'next/font/google'
import InfoTile from "@/components/InfoTile";
import CancelBooking from "@/components/buttons/CancelBooking";

//import { connectToDB } from "@/app/lib/mongodb"


// book to label page; to be changed
export default async function BookingPage({ params }) {
    const { id } = await params;

    return (

        <div className="min-h-screen bg-gradient-to-b from-[#EFF6FF] to-[#F4EBDC]">
            <Navbar/>
            <BookingLayout>
                <Image src={hero_icon} alt="ortega's cleaning logo" className="z-1 scale-50 md:scale-50"></Image>

                <div className="max-w-180">
                    <h2 className="font-[Playfair_Display] font-semibold text-3xl text-center tracking-normal text-[#4A6B8A] mb-10">
                        Thank you for booking a service with Ortega's House Cleaning!
                    </h2>
                </div>
                
                <InfoTile>
                    <h2 className="font-[inter] font-semibold text-2xl text-[#4A6B8A] mb-5">
                        Before Our Visit
                    </h2>
                    <p className="font-[inter] font-normal text-[#4A4A4AE5] text-center">
                        Please make sure no dishes are left in the sink before our visit and ensure personal items or clutter is picked up and put away throughout the home before we arrive.
                    </p>
                </InfoTile>

                <CancelBooking id={id}/>
                
            </BookingLayout>

        </div>

    );
}