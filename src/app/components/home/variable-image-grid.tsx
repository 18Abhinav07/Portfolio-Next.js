"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface VariableImageGridProps {
    images: string[];
}

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function VariableImageGrid({ images }: VariableImageGridProps) {
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);

    useEffect(() => {
        setShuffledImages(shuffleArray(images));
    }, [images]);

    return (
        <div
            className="absolute top-0 left-0 px-2 py-2 grid gap-4"
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gridAutoRows: "auto",
            }}
        >
            {shuffledImages.map((image, index) => (
                <motion.div
                    key={index}
                    className="overflow-hidden items-center justify-center flex rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 3 + index * 0.5,
                        type: "spring",
                        ease: "easeIn",
                    }}
                >
                    <Image
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="block object-cover w-full h-full"
                        width={500}
                        height={300}
                        layout="responsive"
                    />
                </motion.div>
            ))}
        </div>
    );
}
