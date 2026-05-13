
import Image from "next/image";
import arrow from "../../public/gallery/left-arrow.svg";

export default function CarouselLeftButton({pipIndex}) {
 
    return (
        <button className="flex flex-row justify-center items-center bg-white w-12 h-12 rounded-[32px]
            cursor-pointer" onClick={() => pipIndex.decrease()}>

            <Image src={arrow} alt="left arrow"></Image>
        </button>
    );
}