import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/components/about' },
    { name: 'Projects', path: '/components/portfolio-projects' },
    { name: 'Contact', path: '/components/contact' },
    { name: 'Me', path: '/components/me' },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={toggleNav}
                className="fixed bottom-2 right-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-cream text-bold shadow-lg hover:scale-110"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                        <nav className="flex flex-col items-center space-y-8">
                            {routes.map((route, index) => (
                                <motion.a
                                    key={route.path}
                                    href={route.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative text-4xl font-bold text-white/90 transition-colors hover:text-white"
                                >
                                    {route.name}
                                    <motion.span
                                        className="absolute -bottom-2 left-0 h-1 w-0 bg-white"
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;