"use client";

import { useState } from "react";
import ServiceTypeButton from "../buttons/ServiceTypeButton";
import FormField from "../booking/FormField"
import { Inter } from 'next/font/google'
import { useRouter } from "next/navigation"

const inter = Inter({ subsets: ['latin'] })

export default function BookingForm(){

    const router = useRouter();

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()){
            newErrors.name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email){
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)){
            newErrors.email = "Invalid email format";
        }
         
        const phoneRegex = /^\d{10}$/;
        if (!formData.phone) {
            newErrors.phone = "Phone is required";
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (!formData.address.trim()){
            newErrors.address = "Address is required";
        }

        if (!formData.frequency) {
            newErrors.frequency = "Please select a frequency";
        }

        return newErrors;
    }

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        serviceLocation: "Home",
        frequency: "",
        status: "Active",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        console.log(validationErrors);

        if (Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        // database api
        try {
            const res = await fetch("/api/book", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify(formData)
        });

        if (!res.ok) throw new Error("Failed");

        const data = await res.json()

        router.push(`/book/${data.id}`);

        } catch (err) {
            console.error(err);
        }
    };

    const inputClass = "font-[inter] font-normal w-full mt-1 p-3 border border-gray-600 text-[#2E4E65] rounded-lg bg-white/10 backdrop-blur-md";

    return (

        <div className="flex h-full px-6 py-12">

            <form onSubmit={handleSubmit} 
            className="w-full h-full bg-white text-gray-600 rounded-2xl shadow-lg p-6 flex flex-col gap-4 md:justify-between">

                <div className="flex gap-5">
                    <div className="w-1/2">
                        <FormField label="Full Name *">
                            <input 
                                name="name"
                                type="text" 
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder={errors.name}/>
                        </FormField>
                    </div>
                    <div className="w-1/2">
                        <FormField label="Phone Number *">
                            <input 
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange} 
                                className={inputClass}
                                placeholder={errors.phone}/>
                        </FormField>
                    </div>
                </div>

                <FormField label="Email *">
                    <input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange} 
                        className={inputClass}
                        placeholder={errors.email}/>
                </FormField>

                <FormField label="Address *">
                    <input 
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange} 
                        className={inputClass}  
                        placeholder={errors.address}/>
                </FormField>

                <FormField label="Select a Service">

                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <ServiceTypeButton
                            label="Home"
                            icon="🏠"
                            active={formData.serviceLocation === "Home"}
                            onClick={() => 
                                setFormData({
                                    ...formData,
                                    serviceLocation: "Home"
                                })
                            }
                            color="bg-orange-100 text-orange-900"
                            activeColor="bg-orange-200 text-orange-900"
                        />
                        <ServiceTypeButton
                            label="Office"
                            icon="🏢"
                            active={formData.serviceLocation === "Office"}
                            onClick={() => 
                                setFormData({
                                    ...formData,
                                    serviceLocation: "Office"
                                })
                            }
                            color="bg-blue-100 text-blue-900"
                            activeColor="bg-blue-300 text-blue-900"
                        />
                    </div>
                </FormField>

                <FormField label="Frequency">
                    <select 
                        name="frequency" 
                        value={formData.frequency}
                        onChange={handleChange} 
                        className={inputClass}
                    >
                        <option value=""></option>
                        <option value="One Time">One Time</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Biweekly">Biweekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Move In">Move In</option>
                        <option value="Move Out">Move Out</option>


                    </select>
                </FormField>

                <div className="flex flex-col items-center">
                    <button
                        type="submit"
                        className="w-24 font-[inter] bg-[#224a60] text-white py-3 rounded-xl hover:opacity-80 cursor-pointer transition">
                            Submit
                    </button>

                    {(() => {
                        const firstError = Object.values(errors)[0];
                        return (
                            <div className="flex h-3 mt-5 items-center justify-center">
                                <p className={`text-red-400 text-md font-semibold text-center font-[inter] transition-opacity duration-200 ${firstError ? "opacity-100" : "opacity-0"}`}>
                                    {firstError || "."}
                                </p>
                            </div>
                        );
                    })()}
                </div>

                <p className="text-sm text-center font-[inter]">
                    By submitting this booking, you acknowledge that you have read and agree to our terms of service
                </p>
                

            </form>
        </div>
    )
}

