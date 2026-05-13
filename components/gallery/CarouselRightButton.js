
import Image from "next/image";

import arrow from "../../public/gallery/right-arrow.svg";

export default function CarouselRightButton({pipIndex}) {

    return (
        <button className="flex flex-row justify-center items-center bg-white w-12 h-12 rounded-[32px]
            cursor-pointer" onClick={() => pipIndex.increase()}>

            <Image src={arrow} alt="left arrow"></Image>
        </button>
    );
}