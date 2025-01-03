

"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Platform", subItems: ["Overview", "Features", "Integrations"] },
    { name: "Solutions", subItems: ["Enterprise", "Small Business", "Startups"] },
    { name: "Resources", subItems: ["Blog", "Webinars", "Guides"] },
    { name: "Talent Network", subItems: ["Find Talent", "Join as Talent", "Case Studies"] },
  ];

  return (
    <motion.nav
      className="bg-[#0f0e24]  text-white px-6 py-4 flex justify-between items-center shadow-bottom-white relative z-50 right-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Navigation Items */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name} className="group relative">
            <span className="cursor-pointer">{item.name}</span>
            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden group-hover:block bg-[#1e1c3d] py-2 mt-2 rounded shadow-lg">
              {item.subItems.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block px-4 py-2 hover:bg-[#2e2c4d] transition"
                >
                  {subItem}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Right Navigation Buttons */}
      <div className="flex items-center justify-between space-x-4">
        <a
          href="#"
          className="hidden md:inline-block border border-white px-4 py-2 rounded hover:bg-white hover:text-[#0f0e24] transition"
        >
          Hire Talent ↗
        </a>
        <a
          href="#"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden  text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0  w-full bg-[#0f0e24] text-white flex flex-col space-y-4 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col ">
              <span className="font-bold mb-2">{item.name}</span>
              {item.subItems.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block pl-4 py-1 hover:bg-[#2e2c4d] transition"
                >
                  {subItem}
                </a>
              ))}
            </div>
          ))}
          <a href="#" className="block border border-white px-4 py-2 rounded text-center">Hire Talent ↗</a>
          <a href="#" className="block bg-blue-600 px-4 py-2 rounded text-center">Get Started</a>
        </motion.div>
      )}
    </motion.nav>
  );
}

























// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(null);

//   const toggleMenu = (menu) => {
//     setIsMenuOpen(isMenuOpen === menu ? null : menu);
//   };

//   return (
//     <nav className="bg-[#0d0c24] text-white px-6 py-4 relative z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Left Navigation */}
//         <div className="flex space-x-8 items-center">
//           {[
//             { label: "Platform", key: "platform" },
//             { label: "Solutions", key: "solutions" },
//             { label: "Resources", key: "resources" },
//             { label: "Talent Network", key: "talent" },
//           ].map((item) => (
//             <div key={item.key} className="relative">
//               <button
//                 className="hover:text-gray-400"
//                 onClick={() => toggleMenu(item.key)}
//               >
//                 {item.label}
//               </button>
//               {isMenuOpen === item.key && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="absolute top-10 left-0 bg-white text-black shadow-md py-2 px-4 rounded-md"
//                 >
//                   <p>Dropdown content for {item.label}</p>
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right Buttons */}
//         <div className="flex space-x-4">
//           <button className="border border-white px-4 py-2 rounded hover:bg-gray-800">
//             Hire Talent
//           </button>
//           <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
