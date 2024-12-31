// import logo from "../assets/projects/Swaroop's_Navbar_Sign.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { TbBrandLeetcode } from "react-icons/tb";
// import { SiGeeksforgeeks } from "react-icons/si";
// import { SiHackerrank } from "react-icons/si";
// import { FaFileAlt } from "react-icons/fa";
// const Navbar=()=>{
//     return(
//         <nav className="mb-20 flex items-center justify-between py-6">
//             <div className="flex flex-shrink-0 itmes-center">
//                 <img className="mx-15 w-15" src={logo} alt="logo"/>
//             </div>
//             <div className="m-11 flex items-center justify-center gap-9 text-3xl">
//                 <a href="https://www.linkedin.com/in/abhishek-swaroop-40a7a2224/" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin/>
//                 </a>
//                 <a href="https://leetcode.com/Abhishek_Swaroop/" target="_blank" rel="noopener noreferrer">
//                     <TbBrandLeetcode/>
//                 </a>
//                 <a href="https://www.geeksforgeeks.org/user/abhiswrovhz/" target="_blank" rel="noopener noreferrer">
//                     <SiGeeksforgeeks/>
//                 </a>
//                 <a href="https://github.com/abhiswrp" target="_blank" rel="noopener noreferrer">
//                     <FaGithub/>
//                 </a>
//                 <a href="https://www.hackerrank.com/profile/641520004_csai" target="_blank" rel="noopener noreferrer">
//                     <SiHackerrank/>
//                 </a>
//                 <a href="" target="_blank" rel="noopener noreferrer">
//                     <FaFileAlt/>
//                 </a>
//             </div>
//         </nav>
//     );
// };
// export default Navbar;

import logo from "../assets/projects/Swaroop's_Navbar_Sign.png";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex flex-col lg:flex-row items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center lg:mr-7">
                <img className="w-32 lg:w-40" src={logo} alt="logo" />
            </div>
            <div className="mt-4 lg:mt-0 flex items-center justify-center gap-7 text-3xl">
                <a
                    href="https://www.linkedin.com/in/abhishek-swaroop-40a7a2224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://leetcode.com/Abhishek_Swaroop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-colors"
                >
                    <TbBrandLeetcode />
                </a>
                <a
                    href="https://www.geeksforgeeks.org/user/abhiswrovhz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors"
                >
                    <SiGeeksforgeeks />
                </a>
                <a
                    href="https://github.com/abhiswrp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800 transition-colors"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.hackerrank.com/profile/641520004_csai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                >
                    <SiHackerrank />
                </a>
                <a
                    href="https://drive.google.com/file/d/1rCUoVx-nhDtibhccHKpn96ISU1Orso8R/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                >
                    <FaFileAlt />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
