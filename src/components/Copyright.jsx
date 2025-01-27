import { motion } from "framer-motion";
import emblem from "../assets/projects/Abhishek_Swaroop_Sign.png";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-10 bg-neutral-950 text-center border-t border-neutral-800">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-neutral-300 flex flex-col items-center"
            >
                <img
                    src={emblem}
                    alt="Emblem"
                    className="w-35 h-35 lg:w-48 lg:h-auto transition-transform transform hover:scale-110"
                />
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-3 lg:gap-5 text-sm lg:text-base">
                    <h1 className="text-neutral-400 font-medium hover:text-purple-400 transition-colors">
                        © {currentYear} Abhishek Swaroop. All rights reserved.
                    </h1>
                    <h1 className="text-neutral-400 text-xs lg:text-sm font-light">
                        Designed & Developed using React, TailwindCSS, and Framer Motion.
                    </h1>
                    <h1 className="text-neutral-400 text-xs lg:text-sm font-light">
                        Passionate about creating impactful web experiences.
                    </h1>
                </div>
            </motion.div>
        </div>
    );
};

export default Copyright;
