import { motion } from "framer-motion";
import { TextAnimation } from "../../contact/utils/text-animation";
import { STAR } from "../../../utils/fonts";

const BreakoutPage = () => {

    return (
        <div className="relative max-w-full h-full flex items-center justify-center">
            <TextAnimation text=" Behold... This  is  just  a  light  hearted  personal  tour...  Hold  Tight " direction="right" />
            <div className="max-w-[70%] h-[80%] text-wrap flex items-center justify-center">
                <motion.h1
                    animate={{ scale: 1.2, color: "#177BB1" }}
                    transition={{
                        duration: 2,
                        type: "spring",
                    }}
                    className={
                        `lg:text-9xl md:text-8xl sm:text-6xl text-5xl ${STAR.className} text-center font-extrabold text-gray-200`
                    }>
                    NOW,
                    THE BELOW SECTION
                    CONTAINS STUFF
                    ABOUT ME
                    ....
                </motion.h1>
            </div>
        </div>
    )
}

export default BreakoutPage;