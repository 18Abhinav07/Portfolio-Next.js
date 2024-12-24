import { easeIn, motion } from "framer-motion";
import { AQUIRE } from "@/app/utils/fonts";


const StarterAnimation = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: '0' }}
                transition={{
                    duration: 5,
                    ease: easeIn,
                    type: "spring",
                    stiffness: 100,
                }}

                className="w-[100vw] h-[100vh]"
            >
                <div className="w-[100vw] h-[100vh] items-center justify-center flex">
                    <span className={`bg-transparent ${AQUIRE.className} md:text-9xl text-6xl`}>
                        ABOUT ME
                    </span>
                </div>
            </motion.div>
        </>
    )

};

export default StarterAnimation;