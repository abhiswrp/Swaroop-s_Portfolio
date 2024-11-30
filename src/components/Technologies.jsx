import {RiReactjsLine} from "react-icons/ri";
import {FaHtml5} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {FaDatabase} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {FaNetworkWired} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import {motion} from "framer-motion";
const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h1>
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsLine className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-gray-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-cyan-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDatabase className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNetworkWired className="text-7xl text-orange-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaProjectDiagram className="text-7xl text-pink-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-green-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-blue-700"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-green-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
};
export default Technologies;