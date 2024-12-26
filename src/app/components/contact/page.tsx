"use client";

import SmoothScrolling from "@/app/utils/smoothScrolling";
import { ContactLinks } from "./utils/contact-links";
import TerminalContactForm from "./utils/terminal-contact-form";
import { AuroraBackground } from "../home/aurora-background";
import { Lamp } from "./utils/starter-animation";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    delay: 5,
                    duration: 3
                }}
            >
                <Lamp />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1,}}
                transition={{
                    delay: 8,
                    duration: 3
                }}
                className="absolute top-0 left-0">
                <AuroraBackground>
                    <SmoothScrolling />
                    <section className="w-[100vw] min-h-[100vh]">
                        <TerminalContactForm />
                        <ContactLinks />
                    </section>
                </AuroraBackground>
            </motion.div>


        </>
    )

}