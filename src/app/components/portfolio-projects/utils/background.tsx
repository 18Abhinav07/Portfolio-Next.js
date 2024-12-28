"use client";

import { motion } from "framer-motion";
import React from "react";

interface BoxesProps {
    className?: string;
}

const BoxesCore: React.FC<BoxesProps> = ({ className = "" }) => {
    const rows = Array.from({ length: 12 }, (_, i) => i); // Number of rows
    const cols = Array.from({ length: 22 }, (_, i) => i); // Number of columns

    const colors = [
        "hover:bg-sky-300",
        "hover:bg-pink-300",
        "hover:bg-green-300",
        "hover:bg-yellow-300",
        "hover:bg-red-300",
        "hover:bg-purple-300",
        "hover:bg-blue-300",
        "hover:bg-indigo-300",
        "hover:bg-violet-300",
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className={`w-full h-full overflow-hidden ${className}`}>
            {rows.map((row) => (
                <div key={row} className="flex flex-row">
                    {cols.map((col) => (
                        <motion.div
                            key={`${row + col}`}
                            className={`w-20 h-20 border border-slate-900 transition-colors duration-100 ${getRandomColor()}`}
                            whileHover={{
                                scale: 1.01,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export const Boxes = React.memo(BoxesCore);

export default Boxes;
