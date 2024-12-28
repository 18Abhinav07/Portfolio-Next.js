"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TimelineEntry } from "./constants";
import { STAR, TERMINAL } from "../../../utils/fonts";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 90%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <div
            className="w-full bg-neutral-950 font-sans px-4 md:px-8 py-20"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className={`text-3xl md:text-5xl font-semibold ${TERMINAL.className} text-white`}>
                    My Journey
                </h2>
                <p className="text-neutral-300 mt-2 md:text-xl font-semibold">
                    Managing college, courses, CPI, and projects since the dawn of time.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-neutral-700" />
                <motion.div
                    style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                    }}
                    className="absolute left-6 top-0 w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
                />

                {data.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start mb-10">
                        <div className="relative">
                            <div className="w-4 h-4 bg-black border border-neutral-700 rounded-full" />
                        </div>
                        <div>
                            <motion.h3
                                animate={{ scale: 1.01, color: "#177BB2" }}
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                }}
                                className={`text-lg md:text-3xl  ${STAR.className} mb-3`}>
                                {item.title}
                            </motion.h3>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
