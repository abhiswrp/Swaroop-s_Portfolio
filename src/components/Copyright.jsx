import { motion } from "framer-motion";
import emblem from "../assets/projects/Abhishek_Swaroop_Sign.png";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-8 bg-neutral-950 text-center border-t border-neutral-800">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="text-neutral-300 flex flex-col items-center gap-6 lg:gap-12"
            >
                <img
                    src={emblem}
                    alt="Emblem"
                    className="w-32 h-auto lg:w-40 lg:h-auto"
                />
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12 text-sm lg:text-base">
                    <p className="text-neutral-400">
                        © {currentYear} Abhishek Swaroop. All rights reserved.
                    </p>
                    <p className="text-neutral-400">
                        Designed & Developed using React, TailwindCSS, and Framer Motion.
                    </p>
                    <p className="text-neutral-400">
                        Passionate about creating impactful web experiences.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Copyright;
