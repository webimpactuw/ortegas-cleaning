import Image from "next/image";

export default function GalleryImage({image, altText}) {
    return (
        <div className="bg-linear-to-b from-[#00000000] via-[#00000033] via-70% to-[#000000B2] bg-white p-1 rounded-[16px]">
            <Image src={image} alt={altText} className="w-[400px] h-[450px] object-fill rounded-[16px]"></Image>
        </div>
    );
}