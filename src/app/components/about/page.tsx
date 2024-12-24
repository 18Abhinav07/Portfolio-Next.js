"use client";

import { easeIn, motion } from "framer-motion";
import Background from "./utils/background";
import StarterAnimation from "./utils/starter-animation"
import TerminalPortfolio from "./utils/terminal";

export default function About() {
    return (
        <>
            <div className="bg-zinc-800 w-[100vw] h-[100vh]">
                <Background />
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                        duration: 3,
                        delay: 2,
                        ease: easeIn
                    }}
                >
                    <StarterAnimation />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 4,
                        duration: 1,
                        ease: easeIn,
                    }}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                >
                    <TerminalPortfolio />
                </motion.div>
            </div>
        </>
    )
}