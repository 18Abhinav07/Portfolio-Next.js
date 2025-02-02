"use client";

import { AuroraBackground } from "./components/home/aurora-background";
import Landing_Welcome from "./components/home/landing-welcome";
import Links from "./components/links/page";
export default function Home() {

  return (
    <>
      <Landing_Welcome />
      <AuroraBackground>
        <Links />
      </AuroraBackground>
    </>
  )
}