"use client";

import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-black">
            <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className="h-5 w-5 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0,
                    }}
                />
                <motion.span
                    className="h-5 w-5 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                />
                <motion.span
                    className="h-5 w-5 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Loading;
