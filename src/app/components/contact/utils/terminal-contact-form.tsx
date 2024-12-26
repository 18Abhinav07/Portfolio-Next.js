import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Mail, User } from 'lucide-react';
import emailjs from "@emailjs/browser";

const TerminalContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [output, setOutput] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const imagePath = '/images/background/StarryBG1.jpg';

    const addToOutput = (text: string) => {
        setOutput(prev => [...prev, text]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            addToOutput(`> Sending message from ${name}...`);

            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Abhinav Pangaria',
            };

            await emailjs.send(
                'abhinav2003_emailService',
                'template_sm0h60h',
                templateParams,
                '3d5RPX9lHONFYCdvz'
            );

            addToOutput('> Message sent successfully! ✨');
            addToOutput('> Thank you for reaching out. I will get back to you soon!');

            // Clear form
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            addToOutput('> Error: Failed to send message. Please try again.' + error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${imagePath})`,
            }}
            className='w-[100vw] min-h-[100vh] flex items-center justify-center bg-cover'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative md:w-[70%] max-w-[90%] mx-auto rounded-xl shadow-xl shadow-zinc-800 overflow-hidden"
            >
                {/* Terminal Header */}
                <div className="bg-black p-2 flex items-center">
                    <div className="md:flex hidden space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-gray-300 text-sm font-mono">
                        contact@abhinavpangaria ~ /send-message
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="bg-transparent backdrop-blur-sm shadow-lg shadow-zinc-700 rounded-lg p-6 font-mono">
                    <div className="mb-6 text-white font-bold">
                        <Terminal className="inline-block mr-2 text-green-500" size={20} />
                        Any conversation is just an email away ~
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-green-400">{'>'}</span>
                            <User className="text-gray-200" size={16} />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Please enter your name here ..."
                                className="flex-1 bg-transparent md:p-2 outline-none text-gray-300 placeholder-gray-500"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <span className="text-green-400">{'>'}</span>
                            <Mail className="text-gray-200" size={16} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter your email here ..."
                                className="flex-1 bg-transparent md:p-2 border-none outline-none text-gray-300 placeholder-gray-500"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-green-400">{'>'}</span>
                                <span className="text-gray-200 font-bold">Message:</span>
                            </div>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full bg-transparent outline-none rounded-lg p-2 text-gray-300 placeholder-gray-500 resize-none h-32"
                                required
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                            className={`w-full py-2 rounded-md flex items-center justify-center space-x-2 ${isLoading ? 'bg-gray-700' : 'bg-purple-500 hover:bg-purple-400  hover:text-black hover:font-extrabold'
                                } transition-colors`}
                        >
                            <Send size={16} />
                            <span className='font-bold'>{isLoading ? 'Sending...' : 'Send Message'}</span>
                        </motion.button>
                    </form>

                    {/* Terminal Output */}
                    {output.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 pt-4 border-t border-gray-700"
                        >
                            {output.map((line, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-gray-300 mb-1"
                                >
                                    {line}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default TerminalContactForm;