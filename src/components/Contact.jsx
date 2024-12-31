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

// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";
// import emblem from "../assets/projects/Abhishek_Swaroop_Sign.png";

// const Contact = () => {
//     return (
//         <div className="border-b border-neutral-900 pb-20">
//             <motion.h1
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="my-10 text-center text-4xl lg:text-5xl"
//             >
//                 Get in touch
//             </motion.h1>
//             <div className="text-center tracking-tighter">
//                 <motion.p
//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: 100 }}
//                     transition={{ duration: 1 }}
//                     className="my-4 text-base lg:text-lg"
//                 >
//                     {CONTACT.phoneNo}
//                 </motion.p>
//                 <motion.p
//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 1 }}
//                     className="my-4 text-base lg:text-lg"
//                 >
//                     {CONTACT.email}
//                 </motion.p>
//                 <motion.p
//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: 100 }}
//                     transition={{ duration: 1 }}
//                     className="my-4"
//                 >
//                     <img src={emblem} alt="logo" className="w-48 h-auto mx-auto lg:w-56 lg:h-auto" />
//                 </motion.p>
//             </div>
//         </div>
//     );
// };

// export default Contact;



import { motion } from "framer-motion";
import { useState } from "react";
const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/xkgnpqbd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setIsModalOpen(true);
            setFormData({ name: "", email: "", message: "" });
        }
    };
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-10">
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 rounded-2xl">
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full mb-4 p-3 rounded bg-neutral-700 text-white"
                        />
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full mb-4 p-3 rounded bg-neutral-700 text-white"
                        />
                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="5"
                            className="w-full mb-4 p-3 rounded bg-neutral-700 text-white"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-xl"
                        >
                            Submit
                        </motion.button>
                    </form>
                </div>
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.012437360239!2d144.96328031531662!3d-37.81400097975119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3a6b0f7%3A0x1fa3e3d1e3f3!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1638487043033!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Map"
                        />
                    </motion.div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-neutral-800 p-6 rounded-xl text-center">
                        <h2 className="text-xl lg:text-2xl text-white mb-4">Thank you!</h2>
                        <p className="text-sm lg:text-base text-gray-400 mb-4">Your message has been sent successfully.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(false)}
                            className="py-2 px-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-xl"
                        >
                            Close
                        </motion.button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Contact;