// import { CONTACT } from "../constants"
// import {motion} from "framer-motion";
// import emblem from "../assets/projects/Abhishek_Swaroop_Sign.png";
// const Contact = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-20">
//         <motion.h1
//             whileInView={{opacity:1,y:0}}
//             initial={{opacity:0,y:-100}}
//             transition={{duration:0.5}}
//             className="my-10 text-center text-4xl"
//         >
//             Get in touch
//         </motion.h1>
//         <div className="text-center tracknig-tighter">
//             <motion.p
//                 whileInView={{ opacity: 1,x:0}}
//                 initial={{ opacity: 0, x: 100}}
//                 transition={{ duration: 1 }}
//                 className="my-4"
//             >
//                 {CONTACT.phoneNo}
//             </motion.p>
//             <motion.p
//                 whileInView={{opacity: 1,x:0}}
//                 initial={{opacity: 0,x:-100}}
//                 transition={{duration:1}}
//                 className="my-4"
//             >
//                 {CONTACT.email}
//             </motion.p>
//             <motion.p
//                 whileInView={{opacity: 1,x:170}}
//                 initial={{opacity: 0,x:-300}}
//                 transition={{duration:1}}
//                 className="my-4"
//             >
//                 <img src={emblem} alt="logo"/>
//             </motion.p>
//         </div>
//     </div>
//   );
// };
// export default Contact;

import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emblem from "../assets/projects/Abhishek_Swaroop_Sign.png";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl lg:text-5xl"
            >
                Get in touch
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-base lg:text-lg"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-base lg:text-lg"
                >
                    {CONTACT.email}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    <img src={emblem} alt="logo" className="w-48 h-auto mx-auto lg:w-56 lg:h-auto" />
                </motion.p>
            </div>
        </div>
    );
};

export default Contact;
