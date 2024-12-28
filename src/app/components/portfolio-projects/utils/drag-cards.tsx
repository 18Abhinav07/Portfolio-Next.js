import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { projects, Project } from "./constants";
import { ProjectModal } from "./project-modal";
import { TextAnimation } from "../../contact/utils/text-animation";

export const DragCards = () => {
    return (
        <section className="relative grid min-h-[100vh] w-full max-w-[100vw] place-content-center overflow-hidden bg-neutral-950">
            <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[120px] lg:text-[200px]">
                PROJECTS<span className="text-indigo-500">.</span>
            </h2>
            <Cards />
            <TextAnimation text="My  recent  projects  ( also  contains  wip ) .." direction="right" />
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