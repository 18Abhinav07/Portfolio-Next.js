"use client";

import { motion } from "framer-motion";
import { AQUIRE } from "../../utils/fonts";
import VariableImageGrid from "./variable-image-grid";
import Name_Animated from "./name-animated";

interface Props {
    timer: number;
}

export default function Landing_Welcome({ timer }: Props) {
    const letters = "WELCOME".split("");

    return (
        <div className="relative flex items-center justify-center min-h-[100vh] min-w-[100vw] bg-black overflow-hidden">
            {/* White Line Progress Animation */}
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: timer, duration: 2, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 h-1 bg-white"
                style={{ transform: "translateY(-50%)" }}
            />

            {/* Text Reveal Animation */}
            <motion.div
                className={`absolute top-[1/2 - 10px] transform -translate-y-1/2 text-white md:text-8xl text-4xl font-bold ${AQUIRE.className}`}
                style={{ display: "flex", gap: "5px" }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: timer + index * 0.1,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

            {/* Black Vertical Opening Animation */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: timer + 3, ease: "easeInOut" }}
                className="absolute inset-0 bg-black origin-center"
            >
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: timer + 2, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
            >
                <Name_Animated timer={timer} />
            </motion.div>

            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 11, delay: timer + 3, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
            >
                <VariableImageGrid timer={timer} />
            </motion.div>
        </div>
    );
}
