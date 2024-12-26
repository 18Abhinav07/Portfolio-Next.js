import { TERMINAL } from "../../../utils/fonts";
import { InfiniteTechStack } from "./tech-stack";
import TypewriterText from "./typewriter-text";

const generateCommandComponent = (title: string, content: React.ReactNode) => (
    <div className="md:p-6 p-4 w-full rounded-lg mt-6 backdrop-blur-sm md:text-center overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
        <h2 className={`md:text-4xl text-2xl text-green-400 ${TERMINAL.className} mb-4 font-bold tracking-wide`}>
            {title}
        </h2>
        {content}
    </div>
);

const texts = [
    "Hi, I'm Abhinav Pangaria.",
];

export const commands = [
    {
        text: "sudo echo process.env.INTRODUCTION",
        component: generateCommandComponent(
            "Introduction",
            <>
                <TypewriterText
                    text={texts[0]}
                    className="flex md:m-5 font-bold md:text-4xl md:justify-center md:items-center text-xl"
                />
                <span className="text-gray-200 text-lg max-w-full font-roboto leading-relaxed">{`
                    A driven software engineer with a passion for blockchain technology and scalable solutions. Currently pursuing my B.Tech in Computer Science at IIIT Guwahati with a stellar academic record of 9.55 CGPA. I blend theoretical knowledge with practical expertise to create innovative solutions that push the boundaries of what's possible in software development.`}
                </span>
            </>
        ),
    },
    {
        text: "cat about-me.txt",
        component: generateCommandComponent(
            "About Me",
            <span className={`text-gray-200 text-lg leading-relaxed`}>
                {`As an emerging software engineer, I thrive at the intersection of blockchain technology and enterprise solutions. My experience at Blockpay demonstrates my ability to optimize performance and reduce costs, achieving a 12% reduction in gas usage and 52% decrease in transaction fees through innovative solutions like native stablecoin integration. I'm particularly passionate about DeFi, cross-border payments, and creating efficient, secure systems that solve real-world challenges.

                Beyond technical skills, I bring a proven track record of leadership and innovation, as evidenced by my success in prestigious hackathons like Hacker House Goa and JP Morgan's Code for Good, where I've developed solutions that made meaningful impacts on businesses and communities alike.`}
            </span>
        ),
    },
    {
        text: "grep -r 'familiar_tech' ./",
        component: generateCommandComponent(
            "Technical Expertise",
            <div className="overflow-hidden">
                <InfiniteTechStack
                    direction="right"
                    speed={60}
                    pauseOnHover={true}
                    className="mx-auto"
                />
                <span className="block m-5 text-gray-200 text-lg font-roboto leading-relaxed">
                    {`My technical arsenal spans both traditional and cutting-edge technologies. I specialize in blockchain development with expertise in Solidity and Rust, implementing complex smart contracts and DeFi solutions. My full-stack capabilities include proficiency in JavaScript/TypeScript, React, Node.js, and MongoDB, complemented by deep knowledge of blockchain protocols and standards (ERC-20, 721, 1155, 2771).

                    I'm well-versed in development tools and practices including Foundry for smart contract testing, Hardhat for Ethereum development, and Docker for containerization. My experience with IPFS and various blockchain protocols enables me to build robust, decentralized applications that meet modern scalability and security requirements.`}
                </span>
            </div>
        ),
    },
    {
        text: "cat education.txt",
        component: generateCommandComponent(
            "Education",
            <div className="text-gray-200 text-lg font-roboto space-y-4">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-2xl font-bold text-green-400">Indian Institute of Information Technology, Guwahati</span>
                    <span className="text-xl">B.Tech in Computer Science</span>
                    <span className="text-gray-400">November 2022 – July 2026</span>
                    <span className="text-xl font-semibold">CGPA: 9.55/10.0</span>
                </div>
                <div className="mt-4">
                    <span className="font-semibold text-green-400">Key Coursework:</span>
                    <p className="mt-2 leading-relaxed">
                        My academic journey encompasses advanced study in Data Structures and Algorithms, Machine Learning and AI, Cloud Computing, Database Management, Computational Theory, and Computer Networks. This comprehensive curriculum has equipped me with both theoretical depth and practical expertise in modern software development.
                    </p>
                </div>
            </div>
        ),
    },
    {
        text: "sudo echo 'soft_skills.txt'",
        component: generateCommandComponent(
            "Soft Skills",
            <div className="text-gray-200 text-lg font-roboto space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg backdrop-blur-sm border border-green-400/20">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Leadership & Communication</h3>
                        <p className="leading-relaxed">
                            Demonstrated through successful project leadership at Blockpay and hackathon achievements, effectively communicating complex technical concepts to diverse audiences.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg backdrop-blur-sm border border-green-400/20">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Problem-Solving & Innovation</h3>
                        <p className="leading-relaxed">
                            Proven track record of developing innovative solutions, optimizing systems, and reducing costs through creative technical approaches.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg backdrop-blur-sm border border-green-400/20">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Teamwork & Collaboration</h3>
                        <p className="leading-relaxed">
                            Successfully collaborated with cross-functional teams in both professional and hackathon environments, contributing to collective success through effective cooperation.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg backdrop-blur-sm border border-green-400/20">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Adaptability & Growth</h3>
                        <p className="leading-relaxed">
                            Quick to master new technologies and frameworks, with a proven ability to adapt to changing project requirements and emerging industry trends.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
];