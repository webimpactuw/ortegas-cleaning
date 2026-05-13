"use client"

import Image from "next/image";
import GalleryImage from "@/components/gallery/GalleryImage";
import GalleryImageFiller from "@/components/gallery/GalleryImageFiller";

import CarouselLeftButton from "@/components/gallery/CarouselLeftButton";
import CarouselRightButton from "@/components/gallery/CarouselRightButton";
import CarouselPips from "@/components/gallery/CarouselPips";
import PipIndex from "@/components/gallery/PipIndex";

import modern_kitchen from "../../public/gallery/modern-kitchen.jpg";
import luxury_bathroom from "../../public/gallery/luxury-bathroom.jpg";
import kitchen_space from "../../public/gallery/kitchen-space.jpg";
import bathroom from "../../public/gallery/bathroom.jpg";
import kitchen_view from "../../public/gallery/kitchen-view.jpg";
import bathroom_space from "../../public/gallery/bathroom-space.jpg";
import powder_room from "../../public/gallery/powder-room.jpg";
import living_room from "../../public/gallery/living-room.jpg";
import master_bathroom from "../../public/gallery/master-bathroom.jpg";
import kitchen_overview from "../../public/gallery/kitchen-overview.jpg";
import laundry_room from "../../public/gallery/laundry-room.jpg";

export default function GalleryMain() {



    const numPips = 11;
    const pipIndex = PipIndex(numPips);
    const pips = Array.from({length: numPips}).map((item, index) => <CarouselPips key={index} indexNumber={index} pipIndex={pipIndex}></CarouselPips>);

    return (
    <div className="flex flex-col items-center py-4"> 




        
        <div className="flex flex-row items-center">
            <CarouselLeftButton pipIndex={pipIndex}/>
            <div className="w-[80vw] flex items-center justify-center relative p-20 h-140">

                <GalleryImageFiller index="-2" pipIndex={pipIndex}></GalleryImageFiller>
                <GalleryImageFiller index="-1" pipIndex={pipIndex}></GalleryImageFiller>
                <GalleryImage image={modern_kitchen} altText="modern kitchen" caption="Modern Kitchen" index="0" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={luxury_bathroom} altText="luxury bathroom" caption="Luxury Bathroom" index="1" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={kitchen_space} altText="kitchen space" caption="Kitchen Space" index="2" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={bathroom} altText="bathroom" caption="Bathroom" index="3" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={kitchen_view} altText="kitchen view" caption="Kitchen View" index="4" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={bathroom_space} altText="bathroom space" caption="Bathroom Space" index="5" pipIndex={pipIndex}></GalleryImage>

                <GalleryImage image={powder_room} altText="powder room" caption="Powder Room" index="6" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={living_room} altText="living room" caption="Living Room" index="7" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={master_bathroom} altText="master bathroom" caption="Master Bathroom" index="8" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={kitchen_overview} altText="kitchen overview" caption="Kitchen Overview" index="9" pipIndex={pipIndex}></GalleryImage>
                <GalleryImage image={laundry_room} altText="laundry room" caption="Laundry Room" index="10" pipIndex={pipIndex}></GalleryImage>

                <GalleryImageFiller index="11" pipIndex={pipIndex}></GalleryImageFiller>
                <GalleryImageFiller index="12" pipIndex={pipIndex}></GalleryImageFiller>
            </div>

            <CarouselRightButton pipIndex={pipIndex}/>
        </div>


        <div className="flex flex-row items-center justify-center gap-1"> 
            {pips}
        </div>
    </div>
    );
}