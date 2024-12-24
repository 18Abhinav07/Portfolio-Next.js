import { TERMINAL } from "../../../utils/fonts";
import { InfiniteTechStack } from "./tech-stack";
import TypewriterText from "./typewriter-text";

const generateCommandComponent = (title: string, content: React.ReactNode) => (
    <div className="p-4 w-[60%] rounded-md mt-4 backdrop-blur-sm text-center">
        <h2 className={`md:text-4xl text-2xl text-green-400 ${TERMINAL.className} mb-3`}>
            {title}
        </h2>
        {content}
    </div>
);

const texts = [
    "Hi I'm Abhinav Pangaria.",

];

export const commands = [
    {
        text: "sudo echo process.env.INTRODUCTION",
        component: generateCommandComponent(
            "Introduction",
            <TypewriterText text={texts[0]} className='font-bold md:text-2xl text-lg' />
        ),
    },
    {
        text: "cat about-me.txt",
        component: generateCommandComponent(
            "About Me",
            <p className="text-gray-200 font-roboto">
                A passionate developer crafting digital experiences with a love for clean code and innovative solutions.
            </p>
        ),
    },
    {
        text: "grep -r 'familiar_tech' ./",
        component: (
            <InfiniteTechStack
                direction="right"
                speed={60}
                pauseOnHover={true}
                className="mx-auto"
            />
        ),
    },
];