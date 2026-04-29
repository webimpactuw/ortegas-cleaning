"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";


export default function CancelBooking({ id }){
    const router = useRouter();

    const handleCancel = async () => {
        await fetch(`/api/book/${id}/cancel`, {
            method: "POST",
        });
        router.push(`/book/${id}/cancel`)
    };

    return (
        <div>
            <button onClick={handleCancel} className="px-10 py-3 mt-5 bg-[#2E4E65] text-white font-[inter] rounded-4xl cursor-pointer hover:bg-[#324458] transition">
                Cancel Booking
            </button>
        </div>
    );

}