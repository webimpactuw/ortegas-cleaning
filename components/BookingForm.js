"use client";

import { useState } from "react";
import ServiceTypeButton from "./buttons/ServiceTypeButton";

export default function BookingForm(){

    const [serviceType, setServiceType] = useState("home");

    const handleSubmit = (e) => {
        e.preventDefault();

        // database api

        console.log("submitted");
    };

    return (

        <div className="flex-1 flex px-6 py-12">

            <form onSubmit={handleSubmit} className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg p-6 space-y-5" style={{ background: "var(--gradient-bookForm)" }}>

                <div>
                    <label className="text-sm text-gray-300">Full Name *</label>
                    <input type="text" className="w-full mt-1 p-3 border text-gray-300 rounded-lg" placeholder="Name"/>
                </div>

                <div>
                    <label className="text-sm text-gray-300">Email *</label>
                    <input type="email" className="w-full mt-1 p-3 border text-gray-300 rounded-lg" placeholder="email@gmail.com"/>
                </div>

                <div>
                    <label className="text-sm text-gray-300">Phone Number *</label>
                    <input type="tel" className="w-full mt-1 p-3 border text-gray-300 rounded-lg" placeholder="(000) 000-0000"/>
                </div>

                <div>
                    <label className="text-sm text-gray-300">Date & Time</label>
                    <input type="datetime-local" className="w-full mt-1 p-3 border text-gray-300 rounded-lg"/>
                </div>

                <div className="">
                    <label className="text-sm text-gray-300">Select a Service *</label>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <ServiceTypeButton
                            label="Home"
                            icon="🏠"
                            active={serviceType === "home"}
                            onClick={() => setServiceType("home")}
                            color="bg-orange-100 text-orange-900"
                            activeColor="bg-orange-200 text-orange-900"
                        />
                        <ServiceTypeButton
                            label="Office"
                            icon="🏢"
                            active={serviceType === "office"}
                            onClick={() => setServiceType("office")}
                            color="bg-blue-100 text-blue-900"
                            activeColor="bg-blue-300 text-blue-900"
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-24 bg-white text-[#4A6B8A] py-3 rounded-xl hover:opacity-90 transition">
                            Submit
                    </button>
                </div>

                <p className="text-sm">
                    By submitting this booking, you acknowledge that you have read and agree to our terms of service
                </p>
                

            </form>
        </div>
    )
}

