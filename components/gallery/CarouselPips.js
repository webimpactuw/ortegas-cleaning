"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import PipIndex from "@/components/gallery/PipIndex";

export default function CarouselPips({indexNumber, pipIndex}) {

    const activeStyling = "w-6 h-2 rounded-[8px] bg-[#214A60]";
    const inactiveStyling = "w-2 h-2 rounded-[8px] bg-[#B9976A]";

    const [active, setActive] = useState(false);

    const variants = {
        inactive: {
            width: "8px",
            backgroundColor: "#B9976A"
        },

        active: {
            width: "32px",
            backgroundColor: "#214A60"
        }
    }

    return (
        <motion.div onClick={() => setActive(!active)} className="w-[8px] h-[8px] rounded-[16px] bg-[#B9976A]"
        variants={variants}
        initial="inactive"
        animate={indexNumber == pipIndex.index ? "active" : "inactive"}
        ></motion.div>

    );

}