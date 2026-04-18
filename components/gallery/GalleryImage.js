import Image from "next/image";

export default function GalleryImage({beforeImage, afterImage, beforeAlt, afterAlt, bottomText}) {
    return (
        <div className="rounded-[16px] relative grid grid-cols 2 bg-[#F4EBDD]">
            <div className="bg-[#2E4E65] absolute top-2 left-2 z-1 font-[Roboto] text-white px-3 text-[600]
                            text-[1.1rem] rounded-[16px]">Before</div>
            <div className="bg-linear-to-r from-[#2E4E65] to-[#89CFF0] absolute font-[Roboto] text-white 
                            absolute right-2 top-2 px-5 text-[600] text-[1.1rem] rounded-[16px]">After</div>

            <div className="flex flex-row gap-2">
                <div>
                    <Image src={beforeImage} alt={beforeAlt} className="object-fill rounded-tl -[16px]"></Image>
                </div>
                <div>
                    <Image src={afterImage} alt={afterAlt} className="object-fill rounded-tr-[16px]"></Image>
                </div>
            </div>

            <div className="font-[Roboto] font-[500] text-center py-4 text-[#364B60]">{bottomText}</div>
        </div>
    );
}