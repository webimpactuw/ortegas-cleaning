import Link from "next/link";
import { Inter } from "next/font/google";

export default function CancelBooking({ id }){

    return (
        <div className="px-10 py-3 mt-5">
            <Link href={`/book/${id}/cancel`} className="bg-[#2E4E65] px-10 py-3 mt-5 rounded-4xl text-white font-[inter] text-normal">Cancel Booking</Link>
        </div>
    );

}