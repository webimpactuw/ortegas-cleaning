"use client";

import { motion } from "framer-motion";


export default function GalleryImageFiller({index, pipIndex}) {

    const positionVariants = {
        hidden: {
            display: "none",
            opacity: "0%",
            width: "0px",
            height: "0px"
        },

        left: {
            display: "block",
            marginRight: "-200px",
            zIndex: "0",
            width: "275px",
            height: "375px",
            opacity: "40%",
            zIndex: "0"
        },

        right: {
            display: "block",
            marginLeft: "-200px",
            zIndex: "0",
            width: "275px",
            height: "375px",
            opacity: "40%",
        },

        leftOuter: {
            display: "block",
            marginRight: "20px",
            width: "90px",
            height: "310px",
            opacity: "20%",
        },

        rightOuter: {
            display: "block",
            marginLeft: "20px",
            width: "90px",
            height: "310px",
            opacity: "20%",
        },

    }

    const pipIndexToPositionVariant = function(index, pipIndex) {
        const difference = Number(index) - Number(pipIndex);

        if (difference === -2) {
            return "leftOuter";
        }

        else if (difference === -1) {
            return "left";
        }


        else if (difference === 1) {
            return "right";
        }

        else if (difference === 2) {
            return "rightOuter";
        }

        return "hidden";
    }

    return (
        <motion.div
            variants={positionVariants}
            initial="center"
            animate={pipIndexToPositionVariant(index, pipIndex.index)}

            className="relative"
        >

        </motion.div>
    );
}