"use client";

import { useEffect, useState } from "react";
import { AuroraBackground } from "./components/home/aurora-background";
import Landing_Welcome from "./components/home/landing-welcome";
import Links from "./components/links/page";
import { images } from "./components/home/constants";
import Loading from "./utils/loading";

// Function to preload images
const preloadImages = (imageUrls: string[]) => {
  return Promise.all(
    imageUrls.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src); // Return the image src after loading
        img.onerror = reject;
      });
    })
  );
};

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    preloadImages(images)
      .then((loadedImages) => {
        setPreloadedImages(loadedImages as string[]);
        setShuffledImages(shuffleArray(preloadedImages));
        setImagesLoaded(true);
      })
      .catch((err) => console.error("Error loading images", err));
  }, []);

  return (
    <>

      {/* Show loading screen until all images are preloaded */}
      {!imagesLoaded ? (
        <div className="flex items-center justify-center h-screen w-screen text-2xl">
          <Loading />
        </div>
      ) : (
        <>
          <Landing_Welcome images={shuffledImages} />
          <AuroraBackground>
            <Links />
          </AuroraBackground>
        </>
      )}
    </>
  );
}
