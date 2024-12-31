"use client";

import { AuroraBackground } from "./components/home/aurora-background";
import Landing_Welcome from "./components/home/landing-welcome";
import Links from "./components/links/page";
import SmoothScrolling from "./utils/smoothScrolling";


export default function Home() {

  return (
    <>
      <SmoothScrolling />

      {/* Landing Animated Welcome */}

      <Landing_Welcome />

      {/* Link Section */}

      <AuroraBackground >
        <Links />
      </AuroraBackground>

    </>
  );
}
