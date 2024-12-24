"use client";

import { easeIn, motion } from "framer-motion";
import { AQUIRE } from "../../utils/fonts";
import { BackgroundLines } from "./background-lines";

export default function Name_Animated() {
  return (
    <>
      <div
        className={`flex lg:flex-row flex-col top-[45%]
                            w-full h-full items-center justify-center lg:text-7xl text-5xl font-bold text-blue-300 ${AQUIRE.className}`}
      >
        <div>
          {"ABHINAV ".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block z-20"
              style={{
                textShadow:
                  "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div>
          {"PANGARIA ".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block z-20"
              style={{
                textShadow:
                  "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="w-full h-screen absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 14,
          ease: "easeInOut",
        }}
      >
        <BackgroundLines>
          <motion.div
            className={`z-10 absolut flex lg:flex-row flex-col top-[45%]
                            w-full h-full items-center justify-center lg:text-7xl text-5xl font-bold text-blue-300 ${AQUIRE.className}`}
          >
            <div>
              {"ABHINAV ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block z-20"
                  style={{
                    textShadow:
                      "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                  animate={{
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 14 + index * 1,
                    ease: easeIn,
                    repeatDelay: 180,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <div>
              {"PANGARIA ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block z-20"
                  style={{
                    textShadow:
                      "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                  animate={{
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 22 + index * 1,
                    ease: easeIn,
                    repeatDelay: 180,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </BackgroundLines>
      </motion.div>
    </>
  );
}
