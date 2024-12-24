import React from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className }) => {
    const letters = Array.from(text);

    // Animation variants
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Customize stagger delay
                delayChildren: 0.5, // Customize delay before starting animation
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.p
            className={`text-gray-200 font-roboto ${className || ""}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default TypewriterText;
