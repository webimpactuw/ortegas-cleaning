import BookingForm from "@/components/booking/BookingForm";
import Navbar from "@/components/Navbar";
import TermsConditions from "@/components/booking/TermsConditions";


// book to label page; to be changed
export default function Book() {
    return (
        <div className="min-h-screen bg-[#f6f5f2]">
            <Navbar/>
            <div className="max-w-6xl mx-auto px-6 py-12">

                <h3 className="font-[Playfair_Display] font-semibold text-4xl leading-[40px] tracking-normal text-center text-[#2E4E65] mb-4">
                    Book a Service
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex">
                        <BookingForm/>
                    </div>

                    <div className="flex">
                        <TermsConditions/>
                    </div>
                    
                </div>
            
            </div>
            
        </div>
    );
}