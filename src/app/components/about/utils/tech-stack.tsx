"use client";

import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript,
    SiJavascript, SiTailwindcss, SiPrisma,
    SiPostgresql, SiMongodb, SiRedis,
    SiPython, SiRust, SiSolidity,
    SiEthereum, SiWeb3Dotjs, SiIpfs,
    SiGit, SiDocker, SiKubernetes,
    SiAmazon, SiGooglecloud, SiVercel,
    SiNodedotjs, SiExpress, SiGraphql
} from "react-icons/si";
import { IconType } from "react-icons";

type TechCategory = 'Frontend' | 'Backend' | 'Database' | 'Web3' | 'DevOps' | 'Cloud' | 'Languages';

interface TechStack {
    icon: IconType;
    name: string;
    category: TechCategory;
    color: string;
}

const techStack: TechStack[] = [

    // Frontend
    { icon: SiReact, name: "React", category: "Frontend", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", category: "Frontend", color: "#FFFFFF" }, // Adjusted from black
    { icon: SiTypescript, name: "TypeScript", category: "Frontend", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", category: "Frontend", color: "#F7DF1E" },
    { icon: SiTailwindcss, name: "Tailwind", category: "Frontend", color: "#06B6D4" },

    // Backend
    { icon: SiNodedotjs, name: "Node.js", category: "Backend", color: "#339933" },
    { icon: SiExpress, name: "Express", category: "Backend", color: "#FFFFFF" }, // Adjusted from black
    { icon: SiPrisma, name: "Prisma", category: "Backend", color: "#A8B9CC" }, // Adjusted from dark gray
    { icon: SiGraphql, name: "GraphQL", category: "Backend", color: "#E10098" },

    // Database
    { icon: SiPostgresql, name: "PostgreSQL", category: "Database", color: "#4169E1" },
    { icon: SiMongodb, name: "MongoDB", category: "Database", color: "#47A248" },
    { icon: SiRedis, name: "Redis", category: "Database", color: "#DC382D" },

    // Web3
    { icon: SiSolidity, name: "Solidity", category: "Web3", color: "#FFFFFF" }, // Adjusted from dark gray
    { icon: SiEthereum, name: "Ethereum", category: "Web3", color: "#8C8C8C" }, // Adjusted for better contrast
    { icon: SiWeb3Dotjs, name: "Web3.js", category: "Web3", color: "#F16822" },
    { icon: SiIpfs, name: "IPFS", category: "Web3", color: "#65C2CB" },

    // DevOps
    { icon: SiGit, name: "Git", category: "DevOps", color: "#F05032" },
    { icon: SiDocker, name: "Docker", category: "DevOps", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", category: "DevOps", color: "#326CE5" },

    // Cloud
    { icon: SiAmazon, name: "AWS", category: "Cloud", color: "#FF9900" },
    { icon: SiGooglecloud, name: "GCP", category: "Cloud", color: "#4285F4" },
    { icon: SiVercel, name: "Vercel", category: "Cloud", color: "#FFFFFF" }, // Adjusted from black

    // Languages
    { icon: SiPython, name: "Python", category: "Languages", color: "#3776AB" },
    { icon: SiRust, name: "Rust", category: "Languages", color: "#D1D1D1" }, // Adjusted from black
];

interface InfiniteCarouselProps {
    direction?: "left" | "right";
    speed?: number;
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteTechStack: React.FC<InfiniteCarouselProps> = ({
    direction,
    speed,
    pauseOnHover,
    className,
}) => {
    const TechCard = ({ tech, index }: { tech: TechStack; index: number }) => (
        <motion.div
            className="w-28 h-28 flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-700/50 backdrop-blur-sm bg-transparent p-4 
                 hover:border-slate-500 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <tech.icon
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
            />
            <span className="text-xs font-bold text-slate-100 text-center">
                {tech.name}
            </span>
            <span className="absolute font-bold top-2 right-2 text-[10px] text-slate-200">
                {tech.category}
            </span>
        </motion.div>
    );

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-4 py-4"
                    animate={{
                        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: speed,
                            ease: "linear",
                        },
                    }}
                    {...(pauseOnHover && {
                        whileHover: { animationPlayState: "paused" }
                    })}
                >
                    {techStack.map((tech, idx) => (
                        <TechCard
                            key={`${tech.name}-${idx}-1`}
                            tech={tech}
                            index={idx}
                        />
                    ))}
                    {techStack.map((tech, idx) => (
                        <TechCard
                            key={`${tech.name}-${idx}-2`}
                            tech={tech}
                            index={idx}
                        />
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
    );
};