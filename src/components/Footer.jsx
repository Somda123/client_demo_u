// // // // // // // // Footer.tsx
// // // // // // // export default function Footer() {
// // // // // // //     return (
// // // // // // //       <footer className="bg-gray-800 text-white py-6">
// // // // // // //         <div className="container mx-auto text-center">
// // // // // // //           <p>© 2024, Name Inc. All Rights Reserved.</p>
// // // // // // //         </div>
// // // // // // //       </footer>
// // // // // // //     );
// // // // // // //   }
  
// // // // // // "use client";
// // // // // // import { motion } from 'framer-motion';

// // // // // // export default function Footer() {
// // // // // //   const footerData = [
// // // // // //     {
// // // // // //       title: 'PLATFORM',
// // // // // //       links: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5']
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'YET TO BE DECIDED',
// // // // // //       links: ['Text 1', 'Text 2']
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'DESIGN SERVICES',
// // // // // //       links: [
// // // // // //         'Content Writing',
// // // // // //         'Graphic Design',
// // // // // //         'Video Production',
// // // // // //         'Commercial Ads',
// // // // // //         'Product Design',
// // // // // //         'Packaging Design',
// // // // // //         'UI/UX Design',
// // // // // //         'Launch a Brand'
// // // // // //       ]
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'MARTECH SERVICES',
// // // // // //       links: [
// // // // // //         'Custom Web Development',
// // // // // //         'Performance Marketing',
// // // // // //         'Lead-Gen Funnel',
// // // // // //         'Technical SEO',
// // // // // //         'Market Research & Survey',
// // // // // //         'Social Media Marketing',
// // // // // //         'Campaign Planning',
// // // // // //         'WhatsApp/Email Marketing'
// // // // // //       ]
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'MEDIA SERVICES',
// // // // // //       links: [
// // // // // //         'Media Planning & Buying',
// // // // // //         'Influencer Marketing',
// // // // // //         'Event Marketing',
// // // // // //         'Customer Relations'
// // // // // //       ]
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'TALENT NETWORK SERVICES',
// // // // // //       links: ['Get Hired', 'Get Talent', 'Evaluate Creative Talent']
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'RESOURCES',
// // // // // //       links: [
// // // // // //         'Blogs',
// // // // // //         'Case Studies',
// // // // // //         'Our Work',
// // // // // //         'E-Books',
// // // // // //         'Events',
// // // // // //         'Creators Hub',
// // // // // //         'Global Designers',
// // // // // //         'Help Center'
// // // // // //       ]
// // // // // //     }
// // // // // //   ];

// // // // // //   const animationVariants = {
// // // // // //     hidden: { opacity: 0, y: 20 },
// // // // // //     visible: { opacity: 1, y: 0 }
// // // // // //   };

// // // // // //   return (
// // // // // //     <footer className="bg-[#F5F5F5] py-10 px-5 md:px-20 text-[#2B2B2B]">
// // // // // //       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
// // // // // //         {footerData.map((section, index) => (
// // // // // //           <motion.div
// // // // // //             key={index}
// // // // // //             variants={animationVariants}
// // // // // //             initial="hidden"
// // // // // //             animate="visible"
// // // // // //             transition={{ duration: 0.5, delay: index * 0.1 }}
// // // // // //           >
// // // // // //             <h3 className="font-bold text-lg mb-4">{section.title}</h3>
// // // // // //             <ul className="space-y-2">
// // // // // //               {section.links.map((link, linkIndex) => (
// // // // // //                 <li key={linkIndex} className="hover:text-[#4A90E2] cursor-pointer">
// // // // // //                   {link}
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <div className="border-t mt-10 pt-5">
// // // // // //         <div className="flex flex-col md:flex-row justify-between">
// // // // // //           <div className="space-y-3">
// // // // // //             <p>© 2024, Name Inc. All Rights Reserved.</p>
// // // // // //             <div className="space-x-3">
// // // // // //               <a href="#" className="text-[#4A90E2]">Terms of Service</a>
// // // // // //               <a href="#" className="text-[#4A90E2]">Privacy Policy</a>
// // // // // //               <a href="#" className="text-[#4A90E2]">Sitemap</a>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="mt-5 md:mt-0 space-y-3">
// // // // // //             <p>Address</p>
// // // // // //             <p className="text-[#4A90E2]">Join our team</p>
// // // // // //           </div>
// // // // // //           <div className="mt-5 md:mt-0 space-y-3">
// // // // // //             <p>GET IN TOUCH</p>
// // // // // //             <p>Please connect with us at <span className="text-[#4A90E2]">+91-XXXXXXXXXX</span></p>
// // // // // //             <p>or Write us at <span className="text-[#4A90E2]">EMAIL</span></p>
// // // // // //           </div>
// // // // // //           <div className="mt-5 md:mt-0">
// // // // // //             <div className="space-x-4">
// // // // // //               <a href="#" className="text-[#4A90E2]">LinkedIn</a>
// // // // // //               <a href="#" className="text-[#4A90E2]">Facebook</a>
// // // // // //               <a href="#" className="text-[#4A90E2]">Twitter</a>
// // // // // //               <a href="#" className="text-[#4A90E2]">Instagram</a>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // }


// // // // // "use client";
// // // // // import { motion } from 'framer-motion';

// // // // // export default function Footer() {
// // // // //   const footerData = [
// // // // //     {
// // // // //       title: 'PLATFORM',
// // // // //       links: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5']
// // // // //     },
// // // // //     {
// // // // //       title: 'YET TO BE DECIDED',
// // // // //       links: ['Text 1', 'Text 2']
// // // // //     },
// // // // //     {
// // // // //       title: 'DESIGN SERVICES',
// // // // //       links: [
// // // // //         'Content Writing',
// // // // //         'Graphic Design',
// // // // //         'Video Production',
// // // // //         'Commercial Ads',
// // // // //         'Product Design',
// // // // //         'Packaging Design',
// // // // //         'UI/UX Design',
// // // // //         'Launch a Brand'
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       title: 'MARTECH SERVICES',
// // // // //       links: [
// // // // //         'Custom Web Development',
// // // // //         'Performance Marketing',
// // // // //         'Lead-Gen Funnel',
// // // // //         'Technical SEO',
// // // // //         'Market Research & Survey',
// // // // //         'Social Media Marketing',
// // // // //         'Campaign Planning',
// // // // //         'WhatsApp/Email Marketing'
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       title: 'MEDIA SERVICES',
// // // // //       links: [
// // // // //         'Media Planning & Buying',
// // // // //         'Influencer Marketing',
// // // // //         'Event Marketing',
// // // // //         'Customer Relations'
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       title: 'TALENT NETWORK SERVICES',
// // // // //       links: ['Get Hired', 'Get Talent', 'Evaluate Creative Talent']
// // // // //     },
// // // // //     {
// // // // //       title: 'RESOURCES',
// // // // //       links: [
// // // // //         'Blogs',
// // // // //         'Case Studies',
// // // // //         'Our Work',
// // // // //         'E-Books',
// // // // //         'Events',
// // // // //         'Creators Hub',
// // // // //         'Global Designers',
// // // // //         'Help Center'
// // // // //       ]
// // // // //     }
// // // // //   ];

// // // // //   const animationVariants = {
// // // // //     hidden: { opacity: 0, y: 20 },
// // // // //     visible: { opacity: 1, y: 0 }
// // // // //   };

// // // // //   return (
// // // // //     <footer className="bg-[#F5F5F5] py-16 px-8 md:px-20 text-[#2B2B2B]">
// // // // //       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
// // // // //         {footerData.map((section, index) => (
// // // // //           <motion.div
// // // // //             key={index}
// // // // //             variants={animationVariants}
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true, amount: 0.5 }}
// // // // //             transition={{ duration: 0.5, delay: index * 0.1 }}
// // // // //           >
// // // // //             <h3 className="font-semibold text-xl mb-5">{section.title}</h3>
// // // // //             <ul className="space-y-3">
// // // // //               {section.links.map((link, linkIndex) => (
// // // // //                 <li
// // // // //                   key={linkIndex}
// // // // //                   className="hover:text-[#4A90E2] cursor-pointer transition duration-300"
// // // // //                 >
// // // // //                   {link}
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className="border-t border-gray-300 mt-16 pt-8">
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
// // // // //           <div className="space-y-3">
// // // // //             <p className="text-sm">© 2024, Name Inc. All Rights Reserved.</p>
// // // // //             <div className="space-x-5 text-sm">
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">Terms of Service</a>
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">Privacy Policy</a>
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">Sitemap</a>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-sm font-semibold">Address</p>
// // // // //             <p className="text-[#4A90E2] hover:underline cursor-pointer mt-3">Join our team</p>
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-sm font-semibold">GET IN TOUCH</p>
// // // // //             <p className="text-sm mt-3">Please connect with us at <span className="text-[#4A90E2]">+91-XXXXXXXXXX</span></p>
// // // // //             <p className="text-sm">or Write us at <span className="text-[#4A90E2]">EMAIL</span></p>
// // // // //           </div>
// // // // //           <div className="space-y-2">
// // // // //             <p className="text-sm font-semibold">SOCIAL</p>
// // // // //             <div className="flex space-x-5">
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">LinkedIn</a>
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">Facebook</a>
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">Twitter</a>
// // // // //               <a href="#" className="text-[#4A90E2] hover:underline">Instagram</a>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </footer>
// // // // //   );
// // // // // }



// // // // "use client";
// // // // import { motion } from 'framer-motion';

// // // // export default function Footer() {
// // // //   const footerData = [
// // // //     {
// // // //       title: 'PLATFORM',
// // // //       links: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5']
// // // //     },
// // // //     {
// // // //       title: 'YET TO BE DECIDED',
// // // //       links: ['Text 1', 'Text 2']
// // // //     },
// // // //     {
// // // //       title: 'DESIGN SERVICES',
// // // //       links: [
// // // //         'Content Writing',
// // // //         'Graphic Design',
// // // //         'Video Production',
// // // //         'Commercial Ads',
// // // //         'Product Design',
// // // //         'Packaging Design',
// // // //         'UI/UX Design',
// // // //         'Launch a Brand'
// // // //       ]
// // // //     },
// // // //     {
// // // //       title: 'MARTECH SERVICES',
// // // //       links: [
// // // //         'Custom Web Development',
// // // //         'Performance Marketing',
// // // //         'Lead-Gen Funnel',
// // // //         'Technical SEO',
// // // //         'Market Research & Survey',
// // // //         'Social Media Marketing',
// // // //         'Campaign Planning',
// // // //         'WhatsApp/Email Marketing'
// // // //       ]
// // // //     },
// // // //     {
// // // //       title: 'MEDIA SERVICES',
// // // //       links: [
// // // //         'Media Planning & Buying',
// // // //         'Influencer Marketing',
// // // //         'Event Marketing',
// // // //         'Customer Relations'
// // // //       ]
// // // //     },
// // // //     {
// // // //       title: 'TALENT NETWORK SERVICES',
// // // //       links: ['Get Hired', 'Get Talent', 'Evaluate Creative Talent']
// // // //     },
// // // //     {
// // // //       title: 'RESOURCES',
// // // //       links: [
// // // //         'Blogs',
// // // //         'Case Studies',
// // // //         'Our Work',
// // // //         'E-Books',
// // // //         'Events',
// // // //         'Creators Hub',
// // // //         'Global Designers',
// // // //         'Help Center'
// // // //       ]
// // // //     }
// // // //   ];

// // // //   const animationVariants = {
// // // //     hidden: { opacity: 0, y: 20 },
// // // //     visible: { opacity: 1, y: 0 }
// // // //   };

// // // //   return (
// // // //     <footer className="bg-[#F5F5F5] py-16 px-4 md:px-16 lg:px-32 text-[#2B2B2B]">
// // // //       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
// // // //         {footerData.map((section, index) => (
// // // //           <motion.div
// // // //             key={index}
// // // //             variants={animationVariants}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, amount: 0.5 }}
// // // //             transition={{ duration: 0.5, delay: index * 0.1 }}
// // // //           >
// // // //             <h3 className="font-semibold text-lg lg:text-xl mb-4">{section.title}</h3>
// // // //             <ul className="space-y-2">
// // // //               {section.links.map((link, linkIndex) => (
// // // //                 <li
// // // //                   key={linkIndex}
// // // //                   className="hover:text-[#4A90E2] cursor-pointer transition duration-300 text-sm lg:text-base"
// // // //                 >
// // // //                   {link}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //       <div className="border-t border-gray-300 mt-12 pt-8">
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
// // // //           <div className="space-y-3 text-center md:text-left">
// // // //             <p className="text-sm lg:text-base">© 2024, Name Inc. All Rights Reserved.</p>
// // // //             <div className="space-x-4 text-sm lg:text-base">
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">Terms of Service</a>
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">Privacy Policy</a>
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">Sitemap</a>
// // // //             </div>
// // // //           </div>
// // // //           <div className="text-center md:text-left">
// // // //             <p className="text-sm lg:text-base font-semibold">Address</p>
// // // //             <p className="text-[#4A90E2] hover:underline cursor-pointer mt-2">Join our team</p>
// // // //           </div>
// // // //           <div className="text-center md:text-left">
// // // //             <p className="text-sm lg:text-base font-semibold">GET IN TOUCH</p>
// // // //             <p className="text-sm lg:text-base mt-3">Please connect with us at <span className="text-[#4A90E2]">+91-XXXXXXXXXX</span></p>
// // // //             <p className="text-sm lg:text-base">or Write us at <span className="text-[#4A90E2]">EMAIL</span></p>
// // // //           </div>
// // // //           <div className="text-center md:text-left space-y-2">
// // // //             <p className="text-sm lg:text-base font-semibold">SOCIAL</p>
// // // //             <div className="flex justify-center md:justify-start space-x-4">
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">LinkedIn</a>
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">Facebook</a>
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">Twitter</a>
// // // //               <a href="#" className="text-[#4A90E2] hover:underline">Instagram</a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // }





// // // "use client"
// // // import { motion } from 'framer-motion';

// // // export default function Footer() {
// // //   const fadeIn = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { duration: 0.6 } },
// // //   };

// // //   return (
// // //     <motion.footer
// // //       initial="hidden"
// // //       animate="visible"
// // //       variants={fadeIn}
// // //       className="bg-white text-gray-800 border-t border-gray-200"
// // //     >
// // //       <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-5 gap-8">
// // //         {/* Column 1 */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Platform</h5>
// // //           <ul>
// // //             <li className="mb-2">Text 1</li>
// // //             <li className="mb-2">Text 2</li>
// // //             <li className="mb-2">Text 3</li>
// // //             <li className="mb-2">Text 5</li>
// // //             <li>Text 6</li>
// // //           </ul>
// // //           <h5 className="text-lg font-semibold mt-6 mb-4">Yet To Be Decided</h5>
// // //           <ul>
// // //             <li className="mb-2">Text 1</li>
// // //             <li>Text 2</li>
// // //           </ul>
// // //         </div>

// // //         {/* Column 2 */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Design Services</h5>
// // //           <ul>
// // //             <li className="mb-2">Content Writing</li>
// // //             <li className="mb-2">Graphic Design</li>
// // //             <li className="mb-2">Video Production</li>
// // //             <li className="mb-2">Commercial Ads</li>
// // //             <li className="mb-2">Product Design</li>
// // //             <li className="mb-2">Packaging Design</li>
// // //             <li className="mb-2">UI-UX Design</li>
// // //             <li>Launch a Brand</li>
// // //           </ul>
// // //         </div>

// // //         {/* Column 3 */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Martech Services</h5>
// // //           <ul>
// // //             <li className="mb-2">Custom Web Development</li>
// // //             <li className="mb-2">Performance Marketing</li>
// // //             <li className="mb-2">Lead-Gen Funnel</li>
// // //             <li className="mb-2">Technical SEO</li>
// // //             <li className="mb-2">Market Research & Survey</li>
// // //             <li className="mb-2">Social Media Marketing</li>
// // //             <li className="mb-2">Campaign Planning</li>
// // //             <li>WhatsApp/Email Marketing</li>
// // //           </ul>
// // //         </div>

// // //         {/* Column 4 */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Media Services</h5>
// // //           <ul>
// // //             <li className="mb-2">Media Planning & Buying</li>
// // //             <li className="mb-2">Influencer Marketing</li>
// // //             <li className="mb-2">Event Marketing</li>
// // //             <li>Customer Relations</li>
// // //           </ul>
// // //           <h5 className="text-lg font-semibold mt-6 mb-4">Talent Network Services</h5>
// // //           <ul>
// // //             <li className="mb-2">Get Hired</li>
// // //             <li className="mb-2">Get Talent</li>
// // //             <li>Evaluate Creative Talent</li>
// // //           </ul>
// // //         </div>

// // //         {/* Column 5 */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Resources</h5>
// // //           <ul>
// // //             <li className="mb-2">Blogs</li>
// // //             <li className="mb-2">Case Studies</li>
// // //             <li className="mb-2">Our Work</li>
// // //             <li className="mb-2">E-books</li>
// // //             <li className="mb-2">Events</li>
// // //             <li className="mb-2">Creators Hub</li>
// // //             <li className="mb-2">Global Designers</li>
// // //             <li>Help Center</li>
// // //           </ul>
// // //         </div>
// // //       </div>

// // //       <div className="container mx-auto px-4 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
// // //         {/* Company */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Company</h5>
// // //           <ul>
// // //             <li className="mb-2">About Us</li>
// // //             <li>
// // //               <a
// // //                 href="#"
// // //                 className="text-blue-600 hover:underline"
// // //               >
// // //                 Join our team
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>

// // //         {/* Address */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Address</h5>
// // //           <p>Address</p>
// // //         </div>

// // //         {/* Get in Touch */}
// // //         <div>
// // //           <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
// // //           <p>Please connect with us at</p>
// // //           <p>+91-XXXXXXXXXX</p>
// // //           <p>
// // //             or Write us at <a href="mailto:EMAIL">EMAIL</a>
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-200">
// // //         <p className="text-sm text-gray-600">
// // //           © 2024, Name Inc. All Rights Reserved.
// // //         </p>
// // //         <ul className="flex space-x-4">
// // //           <li>
// // //             <a href="#" className="text-blue-600 hover:underline">
// // //               Terms of Service
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="#" className="text-blue-600 hover:underline">
// // //               Privacy Policy
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="#" className="text-blue-600 hover:underline">
// // //               Sitemap
// // //             </a>
// // //           </li>
// // //         </ul>
// // //         <p className="text-sm text-gray-600">
// // //           A Proud <span className="text-blue-600">🇮🇳 Design Agency</span>.
// // //         </p>
// // //       </div>
// // //     </motion.footer>
// // //   );
// // // }



// //  "use client";
// // import { motion } from 'framer-motion';

// // export default function Footer() {
// //   const fadeIn = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { duration: 0.6 } },
// //   };

// //   return (
// //     <motion.footer
// //       initial="hidden"
// //       animate="visible"
// //       variants={fadeIn}
// //       className="bg-white text-gray-800 border-t border-gray-200"
// //     >
// //       <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-6 gap-8">
// //         {/* Column 1 */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Platform</h5>
// //           <ul>
// //             <li className="mb-2">Text 1</li>
// //             <li className="mb-2">Text 2</li>
// //             <li className="mb-2">Text 3</li>
// //             <li className="mb-2">Text 5</li>
// //             <li>Text 6</li>
// //           </ul>
// //           <h5 className="text-lg font-semibold mt-6 mb-4">Yet To Be Decided</h5>
// //           <ul>
// //             <li className="mb-2">Text 1</li>
// //             <li>Text 2</li>
// //           </ul>
// //         </div>

// //         {/* Column 2 */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Design Services</h5>
// //           <ul>
// //             <li className="mb-2">Content Writing</li>
// //             <li className="mb-2">Graphic Design</li>
// //             <li className="mb-2">Video Production</li>
// //             <li className="mb-2">Commercial Ads</li>
// //             <li className="mb-2">Product Design</li>
// //             <li className="mb-2">Packaging Design</li>
// //             <li className="mb-2">UI-UX Design</li>
// //             <li>Launch a Brand</li>
// //           </ul>
// //         </div>

// //         {/* Column 3 */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Martech Services</h5>
// //           <ul>
// //             <li className="mb-2">Custom Web Development</li>
// //             <li className="mb-2">Performance Marketing</li>
// //             <li className="mb-2">Lead-Gen Funnel</li>
// //             <li className="mb-2">Technical SEO</li>
// //             <li className="mb-2">Market Research & Survey</li>
// //             <li className="mb-2">Social Media Marketing</li>
// //             <li className="mb-2">Campaign Planning</li>
// //             <li>WhatsApp/Email Marketing</li>
// //           </ul>
// //         </div>

// //         {/* Column 4 */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Media Services</h5>
// //           <ul>
// //             <li className="mb-2">Media Planning & Buying</li>
// //             <li className="mb-2">Influencer Marketing</li>
// //             <li className="mb-2">Event Marketing</li>
// //             <li>Customer Relations</li>
// //           </ul>
// //           <h5 className="text-lg font-semibold mt-6 mb-4">Talent Network Services</h5>
// //           <ul>
// //             <li className="mb-2">Get Hired</li>
// //             <li className="mb-2">Get Talent</li>
// //             <li>Evaluate Creative Talent</li>
// //           </ul>
// //         </div>

// //         {/* Column 5 */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Resources</h5>
// //           <ul>
// //             <li className="mb-2">Blogs</li>
// //             <li className="mb-2">Case Studies</li>
// //             <li className="mb-2">Our Work</li>
// //             <li className="mb-2">E-books</li>
// //             <li className="mb-2">Events</li>
// //             <li className="mb-2">Creators Hub</li>
// //             <li className="mb-2">Global Designers</li>
// //             <li>Help Center</li>
// //           </ul>
// //         </div>

// //         {/* Column 6 */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Social Media</h5>
// //           <ul>
// //             <li className="mb-2">
// //               <a href="#" className="text-blue-600 hover:underline">Instagram</a>
// //             </li>
// //             <li className="mb-2">
// //               <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
// //             </li>
// //             <li className="mb-2">
// //               <a href="#" className="text-blue-600 hover:underline">Email</a>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-4 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
// //         {/* Company */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Company</h5>
// //           <ul>
// //             <li className="mb-2">About Us</li>
// //             <li>
// //               <a
// //                 href="#"
// //                 className="text-blue-600 hover:underline"
// //               >
// //                 Join our team
// //               </a>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Address */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Address</h5>
// //           <p>Address</p>
// //         </div>

// //         {/* Get in Touch */}
// //         <div>
// //           <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
// //           <p>Please connect with us at</p>
// //           <p>+91-XXXXXXXXXX</p>
// //           <p>
// //             or Write us at <a href="mailto:EMAIL">EMAIL</a>
// //           </p>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-200">
// //         <p className="text-sm text-gray-600">
// //           © 2024, Name Inc. All Rights Reserved.
// //         </p>
// //         <ul className="flex space-x-4">
// //           <li>
// //             <a href="#" className="text-blue-600 hover:underline">
// //               Terms of Service
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#" className="text-blue-600 hover:underline">
// //               Privacy Policy
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#" className="text-blue-600 hover:underline">
// //               Sitemap
// //             </a>
// //           </li>
// //         </ul>
// //         <p className="text-sm text-gray-600">
// //           A Proud <span className="text-blue-600">🇮🇳 Design Agency</span>.
// //         </p>
// //       </div>
// //     </motion.footer>
// //   );
// // }



// "use client";
// import { motion } from 'framer-motion';
// import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// export default function Footer() {
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.6 } },
//   };

//   return (
//     <motion.footer
//       initial="hidden"
//       animate="visible"
//       variants={fadeIn}
//       className="bg-white text-gray-800 border-t border-gray-200"
//     >
//       <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-6 gap-8">
//         {/* Column 1 */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Platform</h5>
//           <ul>
//             <li className="mb-2">Text 1</li>
//             <li className="mb-2">Text 2</li>
//             <li className="mb-2">Text 3</li>
//             <li className="mb-2">Text 5</li>
//             <li>Text 6</li>
//           </ul>
//           <h5 className="text-lg font-semibold mt-6 mb-4">Yet To Be Decided</h5>
//           <ul>
//             <li className="mb-2">Text 1</li>
//             <li>Text 2</li>
//           </ul>
//         </div>

//         {/* Column 2 */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Design Services</h5>
//           <ul>
//             <li className="mb-2">Content Writing</li>
//             <li className="mb-2">Graphic Design</li>
//             <li className="mb-2">Video Production</li>
//             <li className="mb-2">Commercial Ads</li>
//             <li className="mb-2">Product Design</li>
//             <li className="mb-2">Packaging Design</li>
//             <li className="mb-2">UI-UX Design</li>
//             <li>Launch a Brand</li>
//           </ul>
//         </div>

//         {/* Column 3 */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Martech Services</h5>
//           <ul>
//             <li className="mb-2">Custom Web Development</li>
//             <li className="mb-2">Performance Marketing</li>
//             <li className="mb-2">Lead-Gen Funnel</li>
//             <li className="mb-2">Technical SEO</li>
//             <li className="mb-2">Market Research & Survey</li>
//             <li className="mb-2">Social Media Marketing</li>
//             <li className="mb-2">Campaign Planning</li>
//             <li>WhatsApp/Email Marketing</li>
//           </ul>
//         </div>

//         {/* Column 4 */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Media Services</h5>
//           <ul>
//             <li className="mb-2">Media Planning & Buying</li>
//             <li className="mb-2">Influencer Marketing</li>
//             <li className="mb-2">Event Marketing</li>
//             <li>Customer Relations</li>
//           </ul>
//           <h5 className="text-lg font-semibold mt-6 mb-4">Talent Network Services</h5>
//           <ul>
//             <li className="mb-2">Get Hired</li>
//             <li className="mb-2">Get Talent</li>
//             <li>Evaluate Creative Talent</li>
//           </ul>
//         </div>

//         {/* Column 5 */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Resources</h5>
//           <ul>
//             <li className="mb-2">Blogs</li>
//             <li className="mb-2">Case Studies</li>
//             <li className="mb-2">Our Work</li>
//             <li className="mb-2">E-books</li>
//             <li className="mb-2">Events</li>
//             <li className="mb-2">Creators Hub</li>
//             <li className="mb-2">Global Designers</li>
//             <li>Help Center</li>
//           </ul>
//         </div>

//         {/* Column 6 */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Social Media</h5>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#" className="text-blue-600 hover:underline flex items-center">
//                 <FaInstagram className="mr-2" /> Instagram
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-600 hover:underline flex items-center">
//                 <FaLinkedin className="mr-2" /> LinkedIn
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-600 hover:underline flex items-center">
//                 <FaEnvelope className="mr-2" /> Email
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Company */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Company</h5>
//           <ul>
//             <li className="mb-2">About Us</li>
//             <li>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:underline"
//               >
//                 Join our team
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Address */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Address</h5>
//           <p>Address</p>
//         </div>

//         {/* Get in Touch */}
//         <div>
//           <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
//           <p>Please connect with us at</p>
//           <p>+91-XXXXXXXXXX</p>
//           <p>
//             or Write us at <a href="mailto:EMAIL">EMAIL</a>
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-200">
//         <p className="text-sm text-gray-600">
//           © 2024, Name Inc. All Rights Reserved.
//         </p>
//         <ul className="flex space-x-4">
//           <li>
//             <a href="#" className="text-blue-600 hover:underline">
//               Terms of Service
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-blue-600 hover:underline">
//               Privacy Policy
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-blue-600 hover:underline">
//               Sitemap
//             </a>
//           </li>
//         </ul>
//         <p className="text-sm text-gray-600">
//           A Proud <span className="text-blue-600">🇮🇳 Design Agency</span>.
//         </p>
//       </div>
//     </motion.footer>
//   );
// }




"use client";
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white text-gray-800 border-t border-gray-200"
    >
      <div className="container mx-auto ml-20 px-4 py-8 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Column 1 */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Platform</h5>
          <ul>
            <li className="mb-2">Text 1</li>
            <li className="mb-2">Text 2</li>
            <li className="mb-2">Text 3</li>
            <li className="mb-2">Text 5</li>
            <li>Text 6</li>
          </ul>
          <h5 className="text-lg font-semibold mt-6 mb-4">Yet To Be Decided</h5>
          <ul>
            <li className="mb-2">Text 1</li>
            <li>Text 2</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Design Services</h5>
          <ul>
            <li className="mb-2">Content Writing</li>
            <li className="mb-2">Graphic Design</li>
            <li className="mb-2">Video Production</li>
            <li className="mb-2">Commercial Ads</li>
            <li className="mb-2">Product Design</li>
            <li className="mb-2">Packaging Design</li>
            <li className="mb-2">UI-UX Design</li>
            <li>Launch a Brand</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Martech Services</h5>
          <ul>
            <li className="mb-2">Custom Web Development</li>
            <li className="mb-2">Performance Marketing</li>
            <li className="mb-2">Lead-Gen Funnel</li>
            <li className="mb-2">Technical SEO</li>
            <li className="mb-2">Market Research & Survey</li>
            <li className="mb-2">Social Media Marketing</li>
            <li className="mb-2">Campaign Planning</li>
            <li>WhatsApp/Email Marketing</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Media Services</h5>
          <ul>
            <li className="mb-2">Media Planning & Buying</li>
            <li className="mb-2">Influencer Marketing</li>
            <li className="mb-2">Event Marketing</li>
            <li>Customer Relations</li>
          </ul>
          <h5 className="text-lg font-semibold mt-6 mb-4">Talent Network Services</h5>
          <ul>
            <li className="mb-2">Get Hired</li>
            <li className="mb-2">Get Talent</li>
            <li>Evaluate Creative Talent</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Resources</h5>
          <ul>
            <li className="mb-2">Blogs</li>
            <li className="mb-2">Case Studies</li>
            <li className="mb-2">Our Work</li>
            <li className="mb-2">E-books</li>
            <li className="mb-2">Events</li>
            <li className="mb-2">Creators Hub</li>
            <li className="mb-2">Global Designers</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Column 6 */}
       
      </div>

      <div className="container mx-auto  px-4 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Company */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Company</h5>
          <ul>
            <li className="mb-2">About Us</li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Join our team
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Address</h5>
          <p>Address</p>
        </div>

        {/* Get in Touch */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
          <p>Please connect with us at</p>
          <p>+91-XXXXXXXXXX</p>
          <p>
            or Write us at <a href="mailto:EMAIL">EMAIL</a>
          </p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Social Media</h5>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaInstagram className="mr-2" /> 
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaLinkedin className="mr-2" /> 
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaEnvelope className="mr-2" /> 
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-200">
        <p className="text-sm text-gray-600">
          © 2024, Name Inc. All Rights Reserved.
        </p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          A Proud <span className="text-blue-600">🇮🇳 Design Agency</span>.
        </p>
      </div>
    </motion.footer>
  );
}
