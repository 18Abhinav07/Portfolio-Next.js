import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { STAR } from "../../../utils/fonts";
// import Image from "next/image";
import { Project } from "./constants";
import Boxes from "./background";


export const ProjectModal = ({
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
                transition={{
                    duration: 4,
                    type: "spring",

                }}
                className="fixed inset-0 z-50 bg-black p-4"
                onClick={onClose}
            >
                <Boxes className="absolute top-0 left-0 z-30" />
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex top-0 left-0 w-[98%] h-[98%] z-10 overflow-auto rounded-lg backdrop:blur-xl p-8 shadow-xl items-center justify-center"
                >
                    <div className="z-30">
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-800"
                        >
                            <X size={22} className="text-zinc-100 font-bold" />
                        </button>

                        <motion.h1
                            animate={{ scale: 1.1, color: "#177BB1" }}
                            transition={{
                                duration: 2,
                                type: "spring",
                            }}
                            className={`md:text-9xl sm:text-6xl text-5xl ${STAR.className} text-center font-extrabold text-gray-200`}>{project.title}
                        </motion.h1>

                        <div className="mt-4 max-w-4xl">
                            {project.longDescription.map((desc, index) =>
                            (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        type: "spring",
                                    }}
                                    key={index}
                                    className="mt-4 text-gray-200 font-medium font-mono md:text-xl text-lg">{desc}
                                </motion.p>
                            ))}

                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-100">Tech Stack:</h4>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 2,
                                                delay: index * 0.2,
                                                type: "spring",
                                            }}
                                            key={index}
                                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 font-bold"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
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
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};