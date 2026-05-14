import Image from "next/image";
import star from "../public/star.svg";

export default function Review({reviewText, reviewer, numStars}) {
    return (
        <div className="flex flex-col w-[368px] h-[195.95px] bg-white p-6 gap-4
                    rounded-[16px] shadow-md/30">

            <div className="flex gap-2">

                {Array.from({length: Number(numStars)}).map((item, index) => <Image src={star} alt="star" key={index}></Image>)}
            </div>
            <div className="font-[inter] font-[400] text-[#4A4A4ACC] italic">"{reviewText}"</div>
            <div className="font-[inter] text-[#4A6B8A] font-[600]">&mdash; {reviewer}</div>
        </div>
    );
} 