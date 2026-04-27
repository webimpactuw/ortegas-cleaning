import CancelBooking from "../buttons/CancelBooking";
import Bubble from "../Bubble"

export default function BookingLayout({ children }){

    return (
        <div className="relative min-h-screen px-20 py-8">


            <div className="relative w-full min-h-[70vh] rounded-3xl bg-white/40 backdrop-blur-xl shadow-lg border border-white/20 overflow-hidden py-10 flex flex-col items-center">
                <Bubble styleTags="hidden md:block" size={130}  top="20%"  left="65%"/>
                <Bubble styleTags="hidden md:block" size={110}  top="10%"  left="20%"/>
                <Bubble styleTags="hidden md:block" size={280}  top="72%"  left="-5%"/>

                {children}

            </div>
    
        </div>

    );

}