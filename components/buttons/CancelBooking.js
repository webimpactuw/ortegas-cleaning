"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function CancelBooking({ id }){
    const router = useRouter();

    const [open, setOpen] = useState(false);

    const handleCancel = async () => {
        await fetch(`/api/book/${id}/cancel`, {
            method: "POST",
        });
        router.push(`/book/${id}/cancel`)
    };



    return (
        <div>
            <button onClick={() => setOpen(true)} className="px-10 py-3 mt-5 bg-[#2E4E65] text-white font-[inter] rounded-4xl cursor-pointer hover:bg-[#324458] transition">
                Cancel Booking
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl text-center">
                        <h2 className="text-xl font-semibold font-[inter] mb-2">Cancel Booking?</h2>
                        <p className="text-gray-600 mb-6">Are you sure you want to cancel this booking?</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-gray-200 font-[inter] cursor-pointer hover:opacity-80">No</button>
                            <button onClick={async () => {handleCancel(); setOpen(false);}} className="px-4 py-2 rounded-lg bg-[#2E4E65] text-white font-[inter] cursor-pointer hover:opacity-80">Yes</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );

}