import Link from "next/link";

export default function ReadyFunction() {
    return (
        <div className="flex flex-col items-center bg-white border-black border-2 rounded-[16px] mx-48 p-10">
            <div className="font-[Playfair] font-[700] text-[1.5rem] text-black">Ready for the 
                    transformation of your own house?</div>

            <div className="font-[Roboto] text-black text-[0.9rem]">Let our professional team deliver the same exceptional results for your space.</div>

            <Link className="px-8 py-4 bg-linear-to-r from-[#2C3E50] 
                            to-[#4A90E2] rounded-[32px] text-[0.9rem] text-white font-[Roboto] font-[600] mt-4" 
                href="/book">Book Cleaning Service Now!</Link>
        </div>
    );
}