"use client";

import Navigation from "../../utils/navigation-ham";
import SmoothScrolling from "../../utils/smoothScrolling";
import RecentProjects from "./utils/projects";


export default function PortfolioProjects() {
    return (
        <>
            <SmoothScrolling />
            <section className="w-[100vw] min-h-[100vh] bg-gradient from-purple-700 via-purple-800 to-purple-900 flex items-center justify-center">
                <Navigation />
                <RecentProjects />

            </section>
        </>
    )
}