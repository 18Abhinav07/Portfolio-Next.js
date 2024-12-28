import React from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import {
    SiGithub,
    SiFacebook,
    SiLinkedin,
    SiInstagram,
    SiX,
    SiSlack,

} from "react-icons/si";
import { IconType } from "react-icons";
import { useEffect } from "react";
import { TextAnimation } from "./text-animation";

type LinkData = {
    Icon: IconType;
    href: string;
    label: string;
    color: string;
};

const links: LinkData[] = [

    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/abhinavpangaria/", label: "LinkedIn", color: "hover:bg-blue-700" },
    { Icon: SiGithub, href: "https://github.com/18Abhinav07", label: "Github", color: "hover:bg-zinc-600" },
    { Icon: SiInstagram, href: "https://www.instagram.com/18_abhinav_07/", label: "Instagram", color: "hover:bg-pink-700" },
    { Icon: SiFacebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { Icon: SiX, href: "https://x.com/18_r_y_u_k_07", label: "X", color: "hover:bg-gray-800" },
    { Icon: SiSlack, href: "https://abhinavpangaria.slack.com/team/U087A2Z2YJU", label: "Slack", color: "hover:bg-yellow-600" },

];

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};

const LinkBox = ({ Icon, href, label, color }: LinkData) => {

    return (
        <motion.a
            href={href}
            target="_blank"
            className={`group relative h-24 w-full place-content-center overflow-hidden 
                       sm:h-32 md:h-40 bg-transparent transition-all duration-300
                       hover:scale-[0.98] ${color} m-2 `}
            whileHover={{ scale: 1.02, translateY: -80, borderRadius: 20 }}
            transition={{
                duration: 0.1,
                ease: easeIn,
                type: "spring",

            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                className="flex flex-col items-center justify-center gap-2"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
            >
                <Icon className="text-2xl sm:text-4xl lg:text-5xl text-white transition-all duration-300 
                               group-hover:scale-110 group-hover:transform" />
                <motion.span
                    className="text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 
                             transition-all duration-300 font-medium"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                >
                    {label}
                </motion.span>
            </motion.div>

            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
            />
        </motion.a>
    );
};

export const ContactLinks: React.FC = () => {
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const text = "Here are some of the ways you can reach me!";
    return (
        <>
            <div className="min-h-[100vh] max-w-[100vw] w-full bg-transparent 
                      flex items-center justify-center p-4 sm:p-8">
                <AnimatePresence>
                    {loaded && (
                        <motion.div
                            className="w-full max-w-[80%]"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="rounded-xl">
                                <motion.div
                                    className={`max-w-full flex lg:flex-row flex-col`}
                                >
                                    {links.map((link, index) => (
                                        <LinkBox key={index} {...link} />
                                    ))}
                                </motion.div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
            <div className="relative z-10 max-w-full">
                <TextAnimation text={text} direction="right"/>
            </div>
        </>
    );
};

export default ContactLinks;