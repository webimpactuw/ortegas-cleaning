import Navbar from "@/components/Navbar";
import OurWork from "@/components/gallery/OurWork";
import GalleryStatistics from "@/components/gallery/GalleryStatistics";
import GalleryMain from "@/components/gallery/GalleryMain";

// gallery to label page; to be changed
export default function Gallery() {
    return (
        <div className="bg-linear-to-b from-[#EFF6FF] to-40% to-[#F9EBDC]">
            <Navbar/>
            <OurWork/>
            <GalleryMain/>
            <GalleryStatistics/>
        </div>
    );
}