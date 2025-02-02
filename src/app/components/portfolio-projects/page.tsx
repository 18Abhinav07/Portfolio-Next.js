"use client";

import { useEffect, useState } from "react";
import Navigation from "../../utils/navigation-ham";
import { DragCards } from "./utils/drag-cards";
import { motion } from "framer-motion";
import BreakoutPage from "./utils/breakout-page";
import Me from "./utils/me";
import { projects } from "./utils/constants";
import Loading from "@/app/utils/loading";

export default function PortfolioProjects() {
    const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 4000)

        const imageUrls = projects.map((p) => p.image);
        setPreloadedImages(imageUrls as string[]);

    }, []);

    return (
        <>

            <div className={`${!load ? 'absolute' : 'hidden'} w-[100vw] h-[100vh]`} >
                <Loading page="PORTFOLIO" />
            </div>

            <div className={`${load ? 'block' : 'hidden'}`}>
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
            </div>
        </>
    );
}
