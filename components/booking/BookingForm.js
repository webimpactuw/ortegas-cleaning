"use client";

import { useState } from "react";
import ServiceTypeButton from "../buttons/ServiceTypeButton";
import FormField from "../booking/FormField"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function BookingForm(){

    const [serviceType, setServiceType] = useState("home");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceLocation: "Home",
        serviceType: "",
        dateTime: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const setLocation = (location) => {
        setFormData({
            ...formData,
            serviceLocation: location
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // database api

        try {
            const res = await fetch("/api/book", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify(formData)
        });

        if (!res.ok) throw new Error("Failed");
        console.log("Submitted");

        } catch (err) {
            console.error(err);
        }
    };

    const inputClass = "font-[inter] font-normal w-full mt-1 p-3 border-white/20 text-white rounded-lg bg-white/10 backdrop-blur-md";

    return (

        <div className="flex-1 flex px-6 py-12">

            <form onSubmit={handleSubmit} 
            className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg p-6 space-y-5" style={{ background: "var(--gradient-bookForm)" }}>

                <FormField label="Full Name *">
                    <input 
                        name="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}/>
                </FormField>

                <FormField label="Email *">
                    <input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange} 
                        className={inputClass}/>
                </FormField>

                <FormField label="Phone Number *">
                    <input 
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange} 
                        className={inputClass}/>
                </FormField>


                <FormField label="Select a Service">

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
                </FormField>

                <FormField label="Service Type">
                    <select 
                        name="serviceType" 
                        value={formData.serviceType}
                        onChange={handleChange} 
                        className={inputClass}
                    >
                        <option value="">Select a service</option>
                        <option value="Apple">Apple</option>
                        <option value="Ban">Ban</option>
                        <option value="Orange">Orange</option>
                    </select>
                </FormField>

                <FormField label="Date & Time">
                    <input
                        name="dateTime" 
                        type="datetime-local" 
                        value={formData.dateTime}
                        onChange={handleChange}
                        className={inputClass}/>
                </FormField>

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

