import Image from "next/image";
import star from "../public/star.svg";

export default function ReviewPageCard({ reviewText, reviewer, numStars }) {
    return (
        <div className="flex flex-col items-center text-center w-full bg-white p-6 gap-4 rounded-[16px] shadow-md/5">
            <div className="flex gap-2 justify-center">
                {Array.from({ length: Number(numStars) }).map((_, index) => (
                    <Image src={star} alt="star" key={index} />
                ))}
            </div>
            <div className="font-[inter] font-[400] text-[#4A4A4ACC]">
                {reviewText}
            </div>
            <div className="font-[inter] text-[#4A6B8A] font-[600]">
                {reviewer}
            </div>
        </div>
    );
}
