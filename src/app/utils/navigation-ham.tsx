import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Links } from "../components/links/page";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={toggleNav}
                className="fixed bottom-2 right-2 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-transparent backdrop-blur-xl bg-zinc-800 text-white text-bold shadow-lg"
                whileHover={{
                    rotate: 180,
                    border: "2px solid white",
                    color: "",
                    scale: "1.1"
                }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>

            {/* Full-screen Overlay */}
            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 90% 90%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 90% 90%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 90% 90%)' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-black to-gray-900"
                    >
                        <Links />

                    </motion.div>


                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;