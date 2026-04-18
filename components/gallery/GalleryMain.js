import Image from "next/image";
import GalleryImage from "@/components/gallery/GalleryImage";
import before_stained_floor from "../../public/gallery/before-stained-floor.jpg";
import after_stained_floor from "../../public/gallery/after-stained-floor.jpg";
import before_soap from "../../public/gallery/before-soap.jpg";
import after_soap from "../../public/gallery/after-soap.jpg";
import before_stove from "../../public/gallery/before-stove.jpg";
import after_stove from "../../public/gallery/after-stove.jpg";

export default function GalleryMain() {
    return (
        <div className="bg-[#2E4E65] m-8 rounded-[16px] py-12 px-8">
            
            <div className="grid grid-cols-2 gap-8">
                <GalleryImage 
                    beforeImage={before_stained_floor} beforeAlt="before image stained floor"
                    afterImage={after_stained_floor} afterAlt="after image stained floor"
                    bottomText={"From dull and stained floor to bright and refreshed."}>
                </GalleryImage>

                <GalleryImage
                    beforeImage={before_soap} beforeAlt="before image shower floor"
                    afterImage={after_soap} afterAlt="after image shower floor"
                    bottomText={"Soap scum and residue gone."}>
                </GalleryImage>

                <GalleryImage
                    beforeImage={before_stove} beforeAlt="before image stove"
                    afterImage={after_stove} afterAlt="after image stove"
                    bottomText={"Grease and burnt buildup completely removed."}
                ></GalleryImage>


            </div>

        </div>
    );
}