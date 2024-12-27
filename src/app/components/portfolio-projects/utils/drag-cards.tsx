import React, { MutableRefObject, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    longDescription: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    rotate: string;
    top: string;
    left: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "AI Chat Platform",
        description: "Real-time chat application with AI integration",
        image: "/images/background/StarryBG.jpg",
        longDescription: "A sophisticated chat platform that leverages cutting-edge AI models to provide intelligent responses and assistance. Built with Next.js and OpenAI's GPT models.",
        technologies: ["React", "TypeScript", "OpenAI", "WebSocket"],
        githubUrl: "https://github.com/example/ai-chat",
        liveUrl: "https://ai-chat.example.com",
        rotate: "6deg",
        top: "20%",
        left: "25%"
    },
    {
        id: 2,
        title: "E-commerce Dashboard",
        description: "Analytics dashboard for online stores",
        image: "/api/placeholder/600/400",
        longDescription: "Comprehensive analytics dashboard providing real-time insights into sales, inventory, and customer behavior for e-commerce businesses.",
        technologies: ["Next.js", "Redux", "Chart.js", "TailwindCSS"],
        rotate: "12deg",
        top: "45%",
        left: "60%"
    }
];

export const DragCards = () => {
    return (
        <section className="relative grid min-h-[100vh] w-full place-content-center overflow-hidden bg-neutral-950">
            <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
                PROJECTS<span className="text-indigo-500">.</span>
            </h2>
            <Cards />
        </section>
    );
};

const Cards = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="absolute inset-0 z-10" ref={containerRef}>
            {projects.map((project) => (
                <Card
                    key={project.id}
                    project={project}
                    containerRef={containerRef}
                />
            ))}
        </div>
    );
};

interface CardProps {
    project: Project;
    containerRef: MutableRefObject<HTMLDivElement | null>;
}

const ProjectModal = ({
    project,
    isOpen,
    onClose
}: {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>

                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>

                    <div className="mt-4">
                        <Image
                            draggable={false}
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={500}
                            className="h-64 w-full rounded-lg object-cover"
                        />

                        <p className="mt-4 text-gray-700">{project.longDescription}</p>

                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex gap-4">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                                >
                                    <Github size={16} />
                                    View Source
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Card = ({ project, containerRef }: CardProps) => {
    const [zIndex, setZIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");
        let maxZIndex = -Infinity;

        els.forEach((el) => {
            const zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );
            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <>
            <motion.div
                onMouseDown={updateZIndex}
                style={{
                    top: project.top,
                    left: project.left,
                    rotate: project.rotate,
                    zIndex,
                }}
                className={twMerge(
                    "drag-elements absolute md:w-72 w-52 rounded-lg bg-gradient-to-br from-gray-900 via-zinc-800 to-zinc-900 p-2 shadow-xl"
                )}
                drag
                dragConstraints={containerRef}
                dragElastic={0.65}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Image
                    draggable={false}
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="h-40 w-full rounded-md object-cover"
                />
                <div className="mt-4">
                    <h3 className="text-xl font-extrabold text-gray-100">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-4 w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-600 transition-colors"
                    >
                        View Details
                    </button>
                </div>
            </motion.div>

            <ProjectModal
                project={project}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default DragCards;