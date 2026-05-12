import Navbar from "@/components/Navbar";
import BookingLayout from "@/components/booking/BookingLayout";
import { ObjectID } from "mongodb"
import Image from "next/image";
import hero_icon from "../../../public/hero_icon.png";
import type_icon from "../../../public/type_icon.png";
import { Inter } from 'next/font/google'
import InfoTile from "@/components/InfoTile";
import CancelBooking from "@/components/buttons/CancelBooking";
import mongoose from "mongoose";
import ContactTag from "@/components/contactTag";

//import { connectToDB } from "@/app/lib/mongodb"

const inter = Inter({ subsets: ['latin'] })

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null };
}

async function connectDB(){
    if (cached.conn) return cached.conn;

    cached.conn = await mongoose.connect(MONGO_URI);

    return cached.conn;
}

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    serviceLocation: String,
    frequency: String,
    status: String
});

const Booking = 
    mongoose.models.Booking || 
    mongoose.model("Booking", bookingSchema);

export default async function BookingPage({ params }) {

    const { id } = await params;

    await connectDB();

    const booking = await Booking.findById(id).lean();

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

                <div className="flex w-full max-w-220 pt-4">
                    <InfoTile>
                        <div className="flex flex-col items-center gap-2">
                            <Image src={type_icon} alt="" className=""/>
                            <p className="font-[inter] font-normal text-sm text-gray-600">
                                NAME
                            </p>
                            <h2 className="font-[inter] text-xl font-semibold text-[#2E4E65]">
                                {booking.name}
                            </h2>
                        </div>
                    </InfoTile>
                    <InfoTile>
                        <div className="flex flex-col items-center gap-2">
                            <Image src={type_icon} alt="" className=""/>
                            <p className="font-[inter] font-normal text-sm text-gray-600">
                                SERVICE
                            </p>
                            <h2 className="font-[inter] text-xl font-semibold text-[#2E4E65]">
                                {booking.serviceLocation}
                            </h2>
                        </div>            
                    </InfoTile>
                    <InfoTile>
                        <div className="flex flex-col items-center gap-2">
                            <Image src={type_icon} alt="" className=""/>
                            <p className="font-[inter] font-normal text-sm text-gray-600">
                                FREQUENCY
                            </p>
                            <h2 className="font-[inter] text-xl font-semibold text-[#2E4E65]">
                                {booking.frequency}
                            </h2>
                        </div>            
                    </InfoTile>

                </div>

                <ContactTag/>

                <CancelBooking id={id}/>
                
            </BookingLayout>

        </div>

    );
}