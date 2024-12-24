"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <main>
            <div
                {...props}
                className={`relative flex flex-col h-[100vh] items-center justify-center bg-black-900 text-white`}
            >
                {/* Motion div for animated gradient */}
                <motion.div
                    className={`absolute -inset-[10px] opacity-50 blur-[20px] will-change-transform pointer-events-none filter ${showRadialGradient
                        ? "mask-image-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
                        : ""
                        }`}
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(100deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.3) 7%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 12%, rgba(255, 255, 255, 0.2) 16%),
                            repeating-linear-gradient(100deg, rgba(59, 130, 246, 0.4) 10%, rgba(165, 105, 189, 0.4) 15%, rgba(96, 165, 250, 0.5) 20%, rgba(139, 92, 246, 0.4) 25%, rgba(96, 165, 250, 0.4) 30%)
                        `,
                        backgroundSize: "300%, 200%",
                    }}
                    animate={{
                        backgroundPosition: [
                            "0% 0%",
                            "25% 25%",
                            "50% 50%",
                            "75% 75%",
                            "100% 100%",
                        ],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                    }}
                ></motion.div>

                {children}
            </div>
        </main>
    );
};
