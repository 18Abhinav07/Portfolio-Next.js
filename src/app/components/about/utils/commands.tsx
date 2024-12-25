import { TERMINAL } from "../../../utils/fonts";
import { InfiniteTechStack } from "./tech-stack";
import TypewriterText from "./typewriter-text";

const generateCommandComponent = (title: string, content: React.ReactNode) => (
    <div className="md:p-4 p-2 w-full rounded-md mt-4 backdrop-blur-sm md:text-center overflow-hidden">
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
            <>
                <TypewriterText text={texts[0]} className='flex md:m-5 font-bold md:text-4xl md:justify-center md:items-center text-xl' />
                <span className="text-gray-200 text-lg max-w-full font-roboto">
                    A passionate developer crafting digital experiences with a love for clean code and innovative solutions.
                    Make better description etc
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    INTRODUCTION
                    ABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUT
                    INTRODUCTION
                </span>
            </>
        ),
    },
    {
        text: "cat about-me.txt",
        component: generateCommandComponent(
            "About Me",
            <span className="text-gray-200 text-lg font-roboto">
                A passionate developer crafting digital experiences with a love for clean code and innovative solutions.
                Make better description etc

                ABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUTABOUT  ABOUTv  v ABOUT ABOUT ABOUTABOUTABOUT ABOUTABOUT ABOUT ABOUT ABOUTABOUT
            </span>
        ),
    },
    {
        text: "grep -r 'familiar_tech' ./",
        component:
            (

                <div className="overflow-auto">

                    <InfiniteTechStack
                        direction="right"
                        speed={60}
                        pauseOnHover={true}
                        className="mx-auto"
                    />



                    <span className="block m-5">
                        describe your skills wala  describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala describe your skills wala
                    </span>
                </div>

            ),
    },
];