"use client"

export default function FormField({label, children}) {

    return (
        <div>
            <label className="font-[inter] font-normal text-sm text-[#2E4E65]">{label}</label>
            <div className="mt-1">
                {children}
            </div>
        </div>
    )
}