// import {HERO_CONTENT} from "../constants";
// import profilePic from "../assets/kevinRushProfile.png";
// import {motion} from "framer-motion";
// const container=(delay)=>({
//     hidden:{x:-100,opacity:0},
//     visible:{
//         x:0,
//         opacity:1,
//         transition:{duration:0.5, delay:delay},
//     },
// });
// const Hero = () => {
//     return (
//         <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//             <div className="flex flex-wrap">
//                 <div className="w-full lg:w-1/2">
//                     <div className="flex flex-col items-center lg:items-start">
//                         <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Abhishek Swaroop</h1>
//                         <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
//                         <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
//                     </div>
//                 </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex-justify-center">
//                     <img src={profilePic} alt="Abhishek Swaroop"/>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };
// export default Hero;

// import {HERO_CONTENT} from "../constants";
// import profilePic from "../assets/kevinRushProfile.png";
// import {motion} from "framer-motion";
// const container=(delay)=>({
//     hidden:{x:-100,opacity:0},
//     visible:{
//         x:0,
//         opacity:1,
//         transition:{duration:0.5, delay:delay},
//     },
// });
// const Hero = () => {
//     return (
//         <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//             <div className="flex flex-wrap">
//                 <div className="w-full lg:w-1/2">
//                     <div className="flex flex-col items-center lg:items-start">
//                         <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Abhishek Swaroop</h1>
//                         <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
//                         <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
//                     </div>
//                 </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex-justify-center">
//                     <img src={profilePic} alt="Abhishek Swaroop"/>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };
// export default Hero;

// import {HERO_CONTENT} from "../constants";
// import profilePic from "../assets/AI_Model_1_bg.png";
// import {motion} from "framer-motion";
// const container=(delay)=>({
//     hidden:{x:-90,y:-70,opacity:0},
//     visible:{
//         x:90,
//         y:-70,
//         opacity:1,
//         transition:{duration:0.5, delay:delay},
//     },
// });
// const Hero = () => {
//     return (
//         <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//             <div className="flex flex-wrap">
//                 <div className="w-full lg:w-1/2">
//                     <div className="flex flex-col items-center lg:items-start">
//                         <motion.h1
//                             variants={container(0)}
//                             initial="hidden"
//                             animate="visible"
//                             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Abhishek Swaroop</motion.h1>
//                         <motion.span
//                             variants={container(0.5)}
//                             initial="hidden"
//                             animate="visible"
//                             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
//                         <motion.p
//                             variants={container(1)}
//                             initial="hidden"
//                             animate="visible"
//                             className="my-2 max-w-xl py-6 font-light tracking-tighter justify-start">{HERO_CONTENT}</motion.p>
//                     </div>
//                 </div>
//                 <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
//                         <motion.img
//                             initial={{x:350,y:-50,opacity:0,width:500}}
//                             animate={{x:85,y:-50,opacity:1,width:500}}
//                             transition={{duration:1,delay:1.2}}
//                             src={profilePic}
//                             alt="Abhishek Swaroop"
//                             className="w-3/4 max-w-md lg:max-w-lg"
//                         />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Hero;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/AI_Model_1_bg.png";
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
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Abhishek Swaroop</motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-4 font-light tracking-tighter justify-start">{HERO_CONTENT}</motion.p>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
                    <motion.img
                        initial={{ x: 350, y: 0, opacity: 0, width: 500 }}
                        animate={{ x: 0, y: 0, opacity: 1, width: 500 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic}
                        alt="Abhishek Swaroop"
                        className="w-3/4 max-w-md lg:max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
