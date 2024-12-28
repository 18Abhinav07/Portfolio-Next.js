import { STAR } from "@/app/utils/fonts";
import Image from "next/image";
import { TextAnimation } from "../../contact/utils/text-animation";
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    longDescription: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    rotate: string;
    top: string;
    left: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "BLOCKPAY",
        description: "Decentralized payment and payroll platform with on-chain automation.",
        image: "/images/timeline-projects/BP.jpg",
        longDescription: [
            "BLOCKPay is a DeFi platform designed for cross-border payments and payroll systems. It automates payments with human key integration using Holonym and on-ramps through Moon Pay and Chainlink.",
            "Stage-1 product is deployed, and Stage-2 development includes contract upgrades and stable token integration aimed at reducing costs to 1-2%.",
            "Optimized payment contracts reduced gas usage by 12%. Backend redesign decreased response latency by 15 ms. Transaction fees reduced by 52% with Blockcoin, a native stablecoin.",
            "Scalable MongoDB Atlas database enhanced query performance and stability. Firebase-based user authentication implemented for security."
        ],
        technologies: ["MERN", "AWS", "Solidity", "Foundry", "Hardhat"],
        githubUrl: "https://github.com/example/blockpay",
        liveUrl: "https://block-pay-tau.vercel.app/",
        rotate: "15deg",
        top: "25%",
        left: "22%",
    },
    {
        id: 2,
        title: "Pathfinder",
        description: "Pathfinding visualization tool.",
        image: "/images/timeline-projects/PTH_v.png",
        longDescription: [
            "A web application that visualizes various pathfinding algorithms using interactive and immersive animations on a maze.",
        ],
        technologies: ["React.js", "TypeScript", "TailwindCSS"],
        githubUrl: "https://github.com/18Abhinav07",
        liveUrl: "https://visualizer-pathfinding-algortihms.vercel.app/",
        rotate: "-18deg",
        top: "30%",
        left: "35%"
    },
    {
        id: 3,
        title: "Faceify",
        description: "Entry management system with facial recognition.",
        image: "/images/timeline-projects/EMS.png",
        longDescription: [
            "Developed a facial recognition-based entry management system capable of scaling for large traffic inputs with efficient database handling."
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Django", "Bootstrap"],
        githubUrl: "https://github.com/18Abhinav07/Face_recog_Entry_mngmnt_system",
        liveUrl: "",
        rotate: "18deg",
        top: "35%",
        left: "46%",
    },
    {
        id: 4,
        title: "Portfolio",
        description: "If you are reading this then it is a wip..",
        image: "/images/timeline-projects/Portfolio.png",
        longDescription: [
            "....GET TO KNOW ME...."
        ],
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Aceternity", "Motion", "Three"],
        githubUrl: "https://github.com/18Abhinav07/Portfolio-Next.js",
        liveUrl: "",
        rotate: "-17deg",
        top: "37%",
        left: "62%",
    },
    {
        id: 5,
        title: "Notes",
        description: "Minimalistic note-taking app.",
        image: "/images/timeline-projects/Notes.png",
        longDescription: [
            "Take notes, provides an intelligent markdown analyzer, and a clean interface to keep your notes organized."
        ],
        technologies: ["React.js", "Javascript", "Django", "Taiwind"],
        githubUrl: "https://github.com/18Abhinav07/Notes-App-React_Django-",
        liveUrl: "",
        rotate: "20deg",
        top: "38%",
        left: "78%",
    },
];

export interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const TimelineData: TimelineEntry[] = [
    {
        title: "November 2022",
        content: (
            <div>
                <p className="text-neutral-200 text-md md:text-lg xl:text-xl font-bold mb-2">
                    JEE to IIIT
                </p>
                <p className="md:text-lg text-md font-semibold mb-5">
                    That is a man straight after Jee ...
                    Outside vs Inside
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <Image
                        src="/images/grid/AP_Msk.jpg"
                        alt="Man after Jee"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="/images/timeline-projects/Emotion.png"
                        alt="Man after Jee"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div >
        ),
    },
    {
        title: "Late 2023 | Spring 2024",
        content: (
            <div>
                <p className="text-neutral-200 text-md md:text-lg font-semibold mb-3">
                    Well the first four sems went to hell working on CPI college life and stuff like that.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <a href="/images/timeline-projects/Result.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/Result.png"
                            alt="Result for sem 4"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>

                    <Image
                        src="/images/timeline-projects/Happy.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Summer 2024 - The Summer Arc",
        content: (
            <div>
                <p className="text-neutral-200 md:text-lg font-semibold mb-4">
                    {`A man's gotta do what a man's gotta do. 3 months of tutorial hell and coursera grind along with some CS50 and Leetcode.`}
                </p>

                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-300 text-md ">
                        ✅ Registered on Coursera and Edx.
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-md ">
                        ✅ Paid fortune for courses.
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-md ">
                        ✅ Completed a hell lot of courses like seriously a lot.... ( sigh.. check my github )
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-md ">
                        ✅ Worked on projects ... Realised theory is not cutting it anymore ...
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-md ">
                        ✅ Built some starter projects ..
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-md font-semibold mt-3">
                        Jokes apart, the courses were good all it takes is some code along and regular projects to get the hang of it. (cannot upset the coursera gods)
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <a href="https://www.coursera.org/learner/abhinav-pangaria-1807" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/THellMeme.png"
                            alt="Escaping tutorial hell"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/Leetcode_50.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/Leetcode_50.png"
                            alt="Leetcode_50"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/CS50AI.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/CS50AI.png"
                            alt="CS50AI"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/CS50CSQ.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/CS50CSQ.png"
                            alt="CS50CSQ"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/CS50DB.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/CS50DB.png"
                            alt="CS50DB"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/CS50PY.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/CS50PY.png"
                            alt="CS50PY"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/CS50WEB.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/CS50WEB.png"
                            alt="CS50WEB"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/ML.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/ML.png"
                            alt="CS50ML"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/DL.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/DL.png"
                            alt="CS50DL"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/TF.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/TF.png"
                            alt="CS50TF"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/FS.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/FS.png"
                            alt="CS50FS"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/Money.jpg" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/Money.jpg"
                            alt="Money"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                </div>
                <p className="text-neutral-200 text-md md:text-lg font-semibold mt-5">
                    {`The one thing that doing these multitude of courses gave me a variety of knowledge on different subjects. I explored Ml and Ai lots, but now I indulge in end to end web2 development, blockchain and Defi development.`}
                </p>
            </div>
        ),
    },
    {
        title: "July 2024 - August 2024 | The hackathon season",
        content: (
            <div>
                <p className="text-neutral-200 md:text-lg texr-md font-semibold mb-4">
                    {`Ahh the hackathon season, the time to say goodbye to sleep and sanity. Now what changed a person so much invested in ML and AI to go into web2 development and blockchain? -- The hackathon season.`}
                </p>

                <div className="mb-8">
                    <div className="flex gap-2 items-centerflex flex-col text-neutral-300 text-sm md:text-md mb-4">
                        <p className={`${STAR.className} text-2xl font-extrabold mb-3`}>
                            JPMC Code For Good (.. or must I say code for food )
                        </p>
                        <p className={`${STAR.className} text-2xl font-extrabold`}>
                            Hacker House Goa
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a href="/images/grid/CFG.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/CFG.jpg"
                                alt="CFG"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/CFG_gp.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/CFG_gp.jpg"
                                alt="CFG_gp"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/HH_Logo.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/HH_Logo.jpg"
                                alt="HH_Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/HH_Hall.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/HH_Hall.jpg"
                                alt="HH_Hall"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/HH_Img.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/HH_Img.jpg"
                                alt="HH_Img"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/HH_Vr.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/HH_Vr.jpg"
                                alt="HH_Vr"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/HH_Poster.jpg" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/HH_Poster.jpg"
                                alt="HH_Poster"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                        <a href="/images/grid/BP.png" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/grid/BP.png"
                                alt="BP"
                                width={500}
                                height={500}
                                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </a>
                    </div>
                </div>
                <p className="text-neutral-200 text-md md:text-lg font-semibold mt-5">
                    {`Well, JPMC CFG is a pretty well known event and being there provided a very good work under pressure and deadline environmnet experience. Hacker House Goa was a fun event with a lot of learning and a lot of fun. The hackathons were a good experience and provided a lot of learning and a lot of fun. Won Hacker House Goa and secured a summer intern role at JPMC 2025.`}
                </p>
            </div>
        ),
    },
    {
        title: "Mid-August 2024 - November 2024 | The Blockchain Arc",
        content: (
            <div>
                <p className="text-neutral-200 md:text-lg texr-md font-semibold mb-6">
                    {`Saying hello to web3 with cyfrin's blockchain and defi development course. Built projects with it funding apps, nft, raffle, stable token and most important started revamping the contracts for Blockpay along with new end to end stack.`}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <a href="/images/timeline-projects/BP1.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP1.png"
                            alt="BP_1"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/BP2.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP2.png"
                            alt="BP_2"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/BP3.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP3.png"
                            alt="BP_3"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/BP4.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP4.png"
                            alt="BP_4"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/BP5.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP5.png"
                            alt="BP_5"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/BP6.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP6.png"
                            alt="BP_6"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/blockchain-basics-completed.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/blockchain-basics-completed.png"
                            alt="Basics"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/solidity-completed.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/solidity-completed.png"
                            alt="Solidity"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="/images/timeline-projects/foundry-completed.png" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/foundry-completed.png"
                            alt="Foundry"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                </div>

                <p className="text-neutral-200 text-md md:text-lg font-semibold mt-5">
                    {`You might think another tutorial hell, but no this was different. The approach I took was to build projects along with the course and apply them to Blockpay and make it better.`}
                </p>
            </div>
        ),
    },
    {
        title: "December 2024 - Present | The Winter Arc",
        content: (
            <div>
                <p className="text-neutral-200 md:text-lg texr-md font-semibold mb-6">
                    {`Learning and building more on blockchain and defi. Working on Blockpay and other projects. Also, started learning about web3 and blockchain security and auditing. Working with Next.js Motion and Three.js`}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <a href="/images/timeline-projects/BP.jpg" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/BP.jpg"
                            alt="BP"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLjjLVC6n2QWmlC2e3hn_lmf9ums4NIF78" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/timeline-projects/YT.png"
                            alt="YT"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </a>
                </div>

                <p className="text-neutral-200 text-md md:text-lg font-semibold mt-5">
                    {`Checkout the course videos instead ..`}
                </p>

                <TextAnimation text={"TO  BE  CONTINUED . . . . . ."} direction="right" />
            </div>
        ),
    }
];

