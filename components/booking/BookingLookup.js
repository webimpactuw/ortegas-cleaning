"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingLookup() {
    const [id, setId] = useState("");
    const router = useRouter();

    const handleGo = () => {
        if (!id) return;
        router.push(`/book/${id}`);
    };

    const inputClass = "font-[inter] font-normal w-full mt-1 p-3 border-white/20 text-white rounded-lg bg-white/10 backdrop-blur-md";

    return (
        <div className="bg-[#224a60] rounded-3xl shadow-lg w-full max-w-md md:max-w-xl px-5 py-4">
            <h3 className="text-white font-[inter] text-2xl mb-2 text-center">
                Already have a booking?
            </h3>

            <div className="flex flex-col md:flex-row gap-10 w-full">
                <input 
                    value={id} 
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter booking ID"
                    className={inputClass}
                />

                <button onClick={handleGo} className="bg-white text-[#4A6B8A] font-[inter] rounded-2xl w-full md:w-55 p-2 cursor-pointer hover:opacity-80 transition">
                    View Booking
                </button>
            </div>
        </div>
    )
}