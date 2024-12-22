"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./constants";


type Span = {
    colSpan: number;
    rowSpan: number;
};

function getRandomSpan() {
    return Math.floor(Math.random() * 2) + 1; // Random span between 1 and 3
}

export default function VariableImageGrid() {
    const [spans, setSpans] = useState<Span[]>([]);

    useEffect(() => {
        // Generate spans on the client-side after mount
        const newSpans = images.map(() => ({
            colSpan: getRandomSpan(),
            rowSpan: getRandomSpan(),
        }));
        setSpans(newSpans);
    }, []);

    return (
        <div
            className="px-2 py-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
            style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gridAutoRows: "200px", // control the row height
            }}
        >
            {images.map((image, index) => {
                const { colSpan, rowSpan } = spans[index] || { colSpan: 1, rowSpan: 1 }; // Use default values before spans are set

                return (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-lg bg-gray-800"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, delay: 3 + index * 0.2, ease: "easeIn" }}
                        style={{
                            gridColumn: `span ${colSpan}`,
                            gridRow: `span ${rowSpan}`,
                        }}
                    >
                        <Image
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="block h-full w-full object-cover"
                            width={400}
                            height={200}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}
