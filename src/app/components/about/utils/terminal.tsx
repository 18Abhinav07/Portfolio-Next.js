import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, ArrowLeft } from 'lucide-react';
import { commands } from './commands';
import FloatingCard from './floating-card';

const TerminalPortfolio = () => {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(-1);
    const [typedText, setTypedText] = useState("");
    const [showComponent, setShowComponent] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    // Typing animation effect
    useEffect(() => {
        if (!isMounted || currentCommandIndex === -1) return;
        if (currentCommandIndex >= commands.length) return;

        const text = commands[currentCommandIndex].text;
        if (typedText.length < text.length) {
            const timeout = setTimeout(() => {
                setTypedText(text.slice(0, typedText.length + 1));
            }, 50);
            return () => clearTimeout(timeout);
        } else if (!showComponent) {
            const timeout = setTimeout(() => {
                setShowComponent(true);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [typedText, currentCommandIndex, showComponent, isMounted]);

    // Cursor blink effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    // Handle keypress
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isMounted || currentCommandIndex === -1) return;

            if (e.key === 'Enter' &&
                showComponent &&
                typedText === commands[currentCommandIndex].text &&
                currentCommandIndex < commands.length - 1) {
                handleContinue();
            } else if (e.key === 'Escape' &&
                showComponent &&
                typedText === commands[currentCommandIndex].text &&
                currentCommandIndex !== 0) {
                handleRollback();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentCommandIndex, showComponent, typedText, isMounted]);

    // Navigation handlers
    const handleContinue = () => {
        if (currentCommandIndex < commands.length - 1) {
            setCurrentCommandIndex(prev => prev + 1);
            setTypedText("");
            setShowComponent(false);
        }
    };

    const handleRollback = () => {
        if (currentCommandIndex > 0) {
            setCurrentCommandIndex(prev => prev - 1);
            setTypedText("");
            setShowComponent(false);
        }
    };

    // Initial delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
            setCurrentCommandIndex(0);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-[95%] min-h-[90%] m-5 backdrop-blur-sm flex flex-col rounded-xl border border-gray-500/50 shadow-2xl relative">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 rounded-t-xl border-b border-gray-700/50">
                <div className="flex space-x-2">
                    <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                    <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                    <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
                </div>
                <div className="flex items-end text-zinc-300 text-sm pr-3">
                    <Terminal className="w-4 h-4 mr-2" />
                    <span className="hover:text-zinc-100 hover:font-bold">portfolio.sh</span>
                </div>
            </div>

            {/* Terminal Content */}
            {isMounted && (
                <div className="p-6 font-roboto text-white space-y-4 w-full min-h-[90%]">
                    {commands.slice(0, currentCommandIndex + 1).map((command, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex items-center font-bold text-gray-200">
                                <span className="text-green-400 mr-2">➜</span>
                                <span>
                                    <span className="text-green-400 mr-2 font-roboto">18Abhinav07%</span>
                                    {index === currentCommandIndex ? typedText : command.text}
                                    {index === currentCommandIndex && typedText === command.text && cursorVisible && (
                                        <span className="text-green-400 font-bold">_</span>
                                    )}
                                </span>
                            </div>
                            {(index < currentCommandIndex || showComponent) && (
                                <FloatingCard _visible={true}>
                                    {command.component}
                                </FloatingCard>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Navigation Controls - Always visible when component is shown */}
            {showComponent && currentCommandIndex < commands.length && (
                <div className="px-6 pb-4 space-y-4">
                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4">
                        {currentCommandIndex > 0 && (
                            <button
                                onClick={handleRollback}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </button>
                        )}
                        {currentCommandIndex < commands.length - 1 && (
                            <button
                                onClick={handleContinue}
                                className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition-colors"
                            >
                                Continue
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Keyboard Instructions */}
                    <div className="text-center text-gray-400 text-sm font-bold">
                        Continue: ENTER || Rollback: ESC
                    </div>
                </div>
            )}
        </div>
    );
};

export default TerminalPortfolio;