import Link from "next/link";
import Review from "./Review";


export default function WhatOurClientsSay() {
    return (
        <div className="flex flex-col items-center bg-[#FAF8F5] py-12 gap-2">
            <h1 className="font-[Playfair_Display] text-[2.2rem] font-[600] text-[#2E4E65]">What Our Clients Say</h1>
            
            <div className="font-[inter] text-[#4A4A4ACC]">Hear from our satisfied customers</div>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 mb-8">
                <Review numStars="5" reviewer="Sarah Mitchell" 
                reviewText="Ortega's team transformed my home!
                    Professional, thorough, and incredibly
                    trustworthy. Highly recommend!
                "/>
                <Review numStars="5" reviewer="David Chen" 
                reviewText="Best cleaning service we've ever used.
                    Always on time, detail-oriented, and 
                    reasonably priced." />
                <Review numStars="5" reviewer="Maria Rodriguez" 
                reviewText="They've been cleaning my office for
                    months. Consistent quality and friendly
                    service every time!" />
            </div>


            <Link href="#" className="rounded-[16px] text-white font-[Inter] font-[600]
                                    text-[0.8rem] px-7 py-2.5 bg-[#2E4E65]">
                    All reviews →
            </Link>
        </div>
    );
}