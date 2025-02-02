"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "./constants";
import { useEffect, useState } from 'react';

export default function VariableImageGrid() {
    const [imageUrls, setImageUrls] = useState(images);
    const CACHE_NAME = 'image-grid-cache-v1';

    useEffect(() => {
        const cacheImages = async () => {
            // Check if Cache API is available
            if ('caches' in window) {
                try {
                    const cache = await caches.open(CACHE_NAME);

                    // Check which images are already cached
                    const cachedUrls = await Promise.all(
                        images.map(async (imageUrl) => {
                            const match = await cache.match(imageUrl);
                            return { url: imageUrl, isCached: !!match };
                        })
                    );

                    // Cache any uncached images
                    const cachingPromises = cachedUrls
                        .filter(({ isCached }) => !isCached)
                        .map(({ url }) =>
                            fetch(url)
                                .then(response => cache.put(url, response))
                                .catch(error => console.warn(`Failed to cache ${url}:`, error))
                        );

                    await Promise.all(cachingPromises);
                } catch (error) {
                    console.warn('Caching failed:', error);
                }
            }
        };

        cacheImages();

        // Cleanup function to remove old caches
        return () => {
            if ('caches' in window) {
                caches.keys().then(keys => {
                    keys.forEach(key => {
                        if (key !== CACHE_NAME) {
                            caches.delete(key);
                        }
                    });
                });
            }
        };
    }, []);

    return (
        <div className="hidden md:block w-full min-h-screen">
            <div className="grid md:grid-cols-6">
                {imageUrls.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative w-[300] h-[300]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 3 + index * 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <Image
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            width={300}
                            height={300}
                            className="object-cover"
                            priority={index < 4}
                            style={{ width: "auto", height: "auto" }}
                            loading="eager"
                            onError={(e) => {
                                // Fallback to original URL if cached image fails
                                const imgElement = e.target as HTMLImageElement;
                                if (imgElement.src !== image) {
                                    imgElement.src = image;
                                }
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}