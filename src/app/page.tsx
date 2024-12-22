"use client";

import { AuroraBackground } from "./components/home/aurora-background";
import { DragCards } from "./components/home/drag-cards";
import Landing_Welcome from "./components/home/landing-welcome";
import { Links } from "./components/links/page";


export default function Home() {
  return (
    <>
      {/* Landing Animated Welcome */}

      <Landing_Welcome />

      {/* Link Section */}

      <AuroraBackground >
        <Links />
      </AuroraBackground>


      <DragCards />


    </>
  );
}
