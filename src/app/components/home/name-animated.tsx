"use client";

import { easeIn, motion } from "framer-motion";
import { AQUIRE } from "../../utils/fonts";
import { BackgroundLines } from "./background-lines";

interface Props {
  timer: number;
}

export default function Name_Animated({ timer }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 8, delay: timer + 3, ease: "easeInOut" }}
        className={`flex items-center justify-center z-20 w-[100vw] h-[100vh] text-white  md:text-8xl text-6xl font-bold ${AQUIRE.className}`}
        style={{ gap: "5px" }}
      >
        {"T H I S   I S   M E   !".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: [1.5, 1] }}
            transition={{
              delay: timer + 3 + index * 0.05, // Stagger the delay for each letter
              duration: 2,
              ease: "easeInOut",
            }}
            className="font-AQUIRE"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="w-[100vw] h-[100vh] absolute inset-0 top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 11,
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
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: timer + 14 + index * 1,
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
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: timer + 22 + index * 1,
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
