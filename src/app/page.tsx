"use client";

import { useEffect, useState } from "react";
import { AuroraBackground } from "./components/home/aurora-background";
import Landing_Welcome from "./components/home/landing-welcome";
import Links from "./components/links/page";
import { images } from "./components/home/constants";
import Loading from "./utils/loading";

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