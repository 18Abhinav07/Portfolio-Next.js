import React, { useState } from 'react';
import { motion } from 'framer-motion';


type FloatingCardProps = {
    children: React.ReactNode;
    _visible: boolean;

};

const FloatingCard: React.FC<FloatingCardProps> = ({ children, _visible }) => {
    const [visible, setVisible] = useState(_visible);


    return (
        visible && (
            <motion.div
                drag
                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                className="w-full h-full bg-transparent backdrop-blur rounded-md p-4 cursor-grab"
            >
                {/* Close Button */}
                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 focus:outline-none"
                    aria-label="Close"
                >
                    ✖
                </button>

                {/* Content */}
                <div className='w-full h-full items-center justify-center flex'>
                    {children}
                </div>
            </motion.div>
        )
    );
};


export default FloatingCard;