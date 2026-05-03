
import Image from "next/image";
import badge from "../../public/gallery/badge.svg";
import people_icon from "../../public/gallery/people-icon.svg";
import star_icon from "../../public/gallery/star-icon.svg";

export default function GalleryStatistics() {
    return (
        <div className="flex flex-row bg-[#FFFEF8] px-32 py-16 gap-16">
            <div className="flex flex-col items-center gap-3">
                <Image src={badge} alt="badge icon"></Image>

                <div className="font-[Playfair_Display] font-[700] text-[2.1rem] text-[#214A60] text-center">15+ Years</div>
                <div className="font-[Inter] font-[600] text-[1.1rem] text-[#52677A] text-center">Experience Since 2011</div>
                <div className="font-[Inter] font-[400] text-[0.9rem] text-[#52677A] text-center">Over a decade of trusted expertise delivering exceptional cleaning services.</div>
            </div>
            <div className="flex flex-col items-center gap-3 border-x-2 border-[#E4CFAF] px-16">
                <Image src={people_icon} alt="people icon"></Image>

                <div className="font-[Playerfair_Display] font-[700] text-[#214A60] text-[2.1rem]">500+</div>
                <div className="font-[Inter] font-[600] text-[#52677A] text-[1.1rem] text-center">Happy Clients</div>

                <div className="font-[Inter] font-[400] text-[#52677A] text-[0.9rem] text-center">Hundreds of satisfied customers trust us with their cleaning needs.</div>
            </div>

            <div className="flex flex-col items-center gap-3">
                <Image src={star_icon} alt="star icon"></Image>
                <div className="font-[Playfair_Display] font-[700] text-[#214A60] text-[2.1rem]">Premium</div>
                <div className="font-[Inter] font-[600] text-[#52677A] text-center">Quality Service</div>
                <div className="font-[Inter] font-[400] text-[#52677A] text-center">Eco-friendly products and expert techniques for outstanding results.</div>
            </div>
        </div>

    );
}