"use client";


import { ContactLinks } from "./utils/contact-links";
import TerminalContactForm from "./utils/terminal-contact-form";
import { AuroraBackground } from "../home/aurora-background";
import { Lamp } from "./utils/starter-animation";
import { motion } from "framer-motion";
import Navigation from "../../utils/navigation-ham"

export default function Contact() {
    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    delay: 10,
                    duration: 3
                }}
            >
                <Lamp />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, }}
                transition={{
                    delay: 12,
                    duration: 3
                }}
                className="absolute top-0 left-0">
                <AuroraBackground>
                    <section className="w-[100vw] min-h-[100vh]">
                        <TerminalContactForm />
                        <ContactLinks />
                    </section>
                </AuroraBackground>
            </motion.div>
            <Navigation />
        </>
    )

}