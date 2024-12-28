import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Logo_Image.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -90, y: 0, opacity: 0 },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-col lg:flex-row lg:gap-32">
                <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start lg:pl-8">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Abhishek Swaroop</motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Freelancer || Frontend Developer</motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-4 font-light tracking-tighter justify-start">{HERO_CONTENT}</motion.p>
                </div>
                <div className="w-full lg:w-5/12 lg:p-8 flex justify-center">
                    <motion.img
                        initial={{ x: 350, y: 0, opacity: 0, width: 300 }}
                        animate={{ x: 0, y: 0, opacity: 1, width: 350 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic}
                        alt="Abhishek Swaroop"
                        className="w-3/4 max-w-md lg:max-w-lg rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
