"use client";

import Navigation from "../../utils/navigation-ham";
import SmoothScrolling from "../../utils/smoothScrolling";
import { DragCards } from "./utils/drag-cards";
import { motion } from "framer-motion";
import BreakoutPage from "./utils/breakout-page";
import Me from "./utils/me";




export default function PortfolioProjects() {
    return (
        <>
            <SmoothScrolling />
            <section className="w-[100vw] min-h-[100vh] bg-gradient-to-tr from-zinc-800 via-gray-800 to-slate-900 flex items-center justify-center">
                <Navigation />
                <motion.div
                    className="w-full h-full">
                    <DragCards />
                </motion.div>
            </section>

            <section className="w-[100vw] h-[100vh] bg-black">
                <BreakoutPage />
            </section>

            <section className="max-w-[100vw] h-[100vh] bg-gradient-to-tr from-zinc-800 via-gray-800 to-slate-900">
                <Me />
            </section>
        </>
    )
}