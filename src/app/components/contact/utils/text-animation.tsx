"use client";

import { motion } from "framer-motion";
import { TERMINAL } from "../../../utils/fonts";

interface TextAnimationOverlayProps {
    text: string;
}

const TextAnimationOverlay: React.FC<TextAnimationOverlayProps> = ({ text }) => {
    const letters = text.split("");

    return (
        <motion.div
            className="flex"
            animate={{
                x: ["100%", "-100%"],
            }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 22, // Adjust the duration to control speed
                    ease: "linear",
                },
            }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className={`text-3xl md:text-6xl m-1 font-bold ${TERMINAL.className}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

interface TextAnimationProps {
    text: string;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
    return (
        <div className="absolute bottom-0 z-5 w-full bg-transparent opacity-50 text-white flex items-center justify-center overflow-hidden m-5">
            <TextAnimationOverlay text={text} />
        </div>
    );
};
