import BookingLayout from "@/components/booking/BookingLayout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero_icon from "../../../../public/hero_icon.png";
import InfoTile from "@/components/InfoTile";


// book to label page; to be changed
export default function Cancel() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#EFF6FF] to-[#F4EBDC]">
            <Navbar/>
            <BookingLayout>
                <Image src={hero_icon} alt="ortega's cleaning logo" className="z-1 scale-50 md:scale-50"></Image>
                
                <div className="max-w-180">
                    <h2 className="font-[Playfair_Display] font-semibold text-3xl text-center tracking-normal text-[#4A6B8A] mb-10">
                        Your booking has been cancelled
                    </h2>
                    <p className="pb-10">
                        We're sorry to see you go. Your cancelation has been processed successfully.
                    </p>
                </div>
                                
                <InfoTile>
                    <h2 className="font-[inter] font-semibold text-2xl text-[#4A6B8A] mb-5">
                        Ortega's House Cleaning
                    </h2>
                    <p className="font-[inter] font-normal text-[#4A4A4AE5] text-center">
                        If you need to reschedule or book a new service, we're here to help. Our team is ready to serve you whenever you need us.
                    </p>
                </InfoTile>

                <div className="pt-10">
                    <h1 className="font-[inter] font-semibold text-[#4A6B8A]">
                        We hope to see you again soon
                    </h1>
                </div>

            </BookingLayout>


        </div>
    );
}