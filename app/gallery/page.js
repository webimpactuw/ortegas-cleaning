import Navbar from "@/components/Navbar";
import OurWork from "@/components/gallery/OurWork";
import GalleryMain from "@/components/gallery/GalleryMain";
import ReadySection from "@/components/gallery/ReadySection";

// gallery to label page; to be changed
export default function Gallery() {
    return (
        <div className="bg-[#EFF6FF]">
            <Navbar/>
            <OurWork/>
            <GalleryMain/>
            <ReadySection/>
        </div>
    );
}