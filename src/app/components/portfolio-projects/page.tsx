"use client";

import { useEffect, useState } from "react";
import Navigation from "../../utils/navigation-ham";
import { DragCards } from "./utils/drag-cards";
import { motion } from "framer-motion";
import BreakoutPage from "./utils/breakout-page";
import Me from "./utils/me";
import { projects } from "./utils/constants";
import Loading from "@/app/utils/loading";

// Function to preload images
const preloadImages = (imageUrls: string[]) => {
    return Promise.all(
        imageUrls.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = reject;
            });
        })
    );
};

export default function PortfolioProjects() {
    const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imageUrls = projects.map((p) => p.image);
        preloadImages(imageUrls)
            .then((loadedImages) => {
                setPreloadedImages(loadedImages as string[]);
                setImagesLoaded(true);
            })
            .catch((err) => console.error("Error loading images", err));
    }, []);

    return (
        <>
            {!imagesLoaded ? (
                <div className="flex items-center justify-center h-screen w-screen bg-black text-white text-2xl">
                    <Loading />
                </div>
            ) : (
                <>
                    <section className="w-[100vw] min-h-[100vh] bg-gradient-to-tr from-zinc-800 via-gray-800 to-slate-900 flex items-center justify-center">
                        <Navigation />
                        <motion.div className="w-full h-full">
                            <DragCards preloadedImages={preloadedImages} />
                        </motion.div>
                    </section>

                    <section className="w-[100vw] h-[100vh] bg-black">
                        <BreakoutPage />
                    </section>

                    <section className="max-w-[100vw] h-[100vh] bg-gradient-to-tr from-zinc-800 via-gray-800 to-slate-900">
                        <Me />
                    </section>
                </>
            )}
        </>
    );
}
