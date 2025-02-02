"use client";

import { motion } from "framer-motion";

interface Props {
    page: string;
}

const Loading = ({ page }: Props) => {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-black">
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
            <motion.p
                className="text-white mt-5 font-AQUIRE text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Loading {page}...
            </motion.p>
        </div>
    );
};

export default Loading;
