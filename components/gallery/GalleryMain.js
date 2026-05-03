import Image from "next/image";
import GalleryImage from "@/components/gallery/GalleryImage";
import modern_kitchen from "../../public/gallery/modern-kitchen.jpg";

export default function GalleryMain() {
    return (
        <div className="flex flex-row items-center justify-center relative p-16">
            
            <GalleryImage image={modern_kitchen} altText="modern kitchen" className=""></GalleryImage>

        </div>
    );
}