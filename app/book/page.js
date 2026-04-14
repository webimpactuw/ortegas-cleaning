import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import TermsConditions from "@/components/TermsConditions";


// book to label page; to be changed
export default function Book() {
    return (
        <div className="min-h-screen bg-[#f6f5f2]">
            <Navbar/>
            <div className="max-w-6xl mx-auto px-6 py-12">

                <h1 className="text-3xl font-semibold text-center mb-10">
                    Book a Service
                </h1>

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