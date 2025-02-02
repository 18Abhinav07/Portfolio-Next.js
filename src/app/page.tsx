"use client";

import { AuroraBackground } from "./components/home/aurora-background";
import Landing_Welcome from "./components/home/landing-welcome";
import Links from "./components/links/page";
import { useEffect, useState } from "react";
import Loading from "./utils/loading";
import { motion } from "framer-motion";

export default function Home() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const timer = 3000;

  useEffect(() => {
    setTimeout(() => {
      setAllImagesLoaded(true);
    }, timer)
  })

  return (
    <>
      <div className={`${!allImagesLoaded ? 'absolute' : 'hidden'} w-[100vw] h-[100vh]`} >
        <Loading page=" " />
      </div >

      <div className={`${allImagesLoaded ? 'block' : 'hidden'}`}>
        <Landing_Welcome timer={timer / 1000} />

        <AuroraBackground>
          <Links />
        </AuroraBackground>
      </div>
    </>
  );
}