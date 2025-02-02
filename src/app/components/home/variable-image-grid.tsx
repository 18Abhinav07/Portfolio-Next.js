"use client";

import { motion } from "framer-motion";
interface VariableImageGridProps {
    images: string[];
}

export default function VariableImageGrid({ images }: VariableImageGridProps) {
    return (
        <div
            className="absolute top-0 left-0 px-2 py-2 grid gap-4"
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gridAutoRows: "auto",
            }}
        >
            {images.map((image, index) => (
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
                    <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="block object-cover w-full h-full"
                        loading="eager" // Ensures images are loaded immediately
                    />
                </motion.div>
            ))}
        </div>
    );
}
