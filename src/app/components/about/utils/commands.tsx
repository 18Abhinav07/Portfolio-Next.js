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
                   I specialize in building websites, designing frontends, structuring backends, and developing secure smart contracts on Ethereum. I have hands-on experience with a wide range of technologies, successfully leading and collaborating on projects both independently and as part of a team, from concept to deployment.`}
                </span>
            </>
        ),
    },
    {
        text: "cat about-me.txt",
        component: generateCommandComponent(
            "About Me",
            <span className={`text-gray-200 text-lg leading-relaxed`}>
                {`As an emerging software engineer, I excel at the intersection of blockchain technology and enterprise solutions, with the versatility to navigate both Web2 and Web3 environments seamlessly.

                I contributed to the development of BlockPay and have hands-on experience in DeFi, blockchain protocols, backend systems, and frontend development.

                Beyond technical expertise, I bring a strong track record of leadership and innovation. My accomplishments include success in prestigious hackathons like Hacker House Goa and JP Morgan's Code for Good, where I collaborated with my team to create impactful solutions for businesses and communities.`}
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
                    {`My technical portfolio bridges traditional and cutting-edge technologies, enabling me to deliver innovative solutions. I specialize in end-to-end Web3 development, with expertise in Solidity for implementing complex smart contracts and DeFi solutions. My full-stack capabilities encompass JavaScript/TypeScript, React, Node.js, and MongoDB, alongside a solid understanding of various ERC standards.

                    I have hands-on experience with development tools such as Docker, Foundry, Kubernetes, Hardhat, and AWS, which have been instrumental in building scalable and efficient systems.

                    Driven by a passion for innovation, I continually explore and adapt to emerging technologies in the industry to stay ahead in the rapidly evolving tech landscape.`}
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
                         My coursework in my time at IIIT Guwahati includes Data Structures and Algorithms, Machine Learning and AI, Cloud Computing, Database Management, Computational Theory, and Computer Networks. This comprehensive curriculum has equipped me with both theoretical depth and practical expertise in modern software development.
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