// "use client";
// // File: components/CaseStudySection.jsx
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const CaseStudySection = () => {
//   return (
//     <section className="bg-gray-900 py-16 px-6 text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Logos Section */}
//         <div className="flex justify-center items-center gap-6 mb-12">
//           <Image src="/logos/parkplus.png" alt="Park+" width={100} height={50} />
//           <Image src="/assets/piramal-new.svg" alt="Piramal" width={100} height={50} />
//           <Image src="/assets/adani_logo.png" alt="Adani" width={100} height={50} />
//           <Image src="/logos/rvshare.png" alt="RVshare" width={100} height={50} />
//           <Image src="/logos/rvshare.png" alt="Apollo 247" width={100} height={50} />
//           {/* <Image src="/assets/apollo247.svg" alt="Apollo 247" width={100} height={50} /> */}
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-4"
//           >
//             <p className="text-yellow text-sm font-semibold uppercase tracking-widest">
//               Featured Case Study
//             </p>
//             <h3 className="text-2xl md:text-3xl font-bold leading-snug">
//               "Reimagining a Legacy: Redefining Top's India Brand Identity and Strategy
//               for the Modern Consumer"
//             </h3>
//             <div className="flex items-center gap-12">
//               <div>
//                 <p className="text-4xl font-bold text-green">250%</p>
//                 <p className="text-sm text-gray-300">Increase in Click Rate</p>
//               </div>
//               <div>
//                 <p className="text-4xl font-bold text-green">192k+</p>
//                 <p className="text-sm text-gray-300">Leads Generated with Creatives</p>
//               </div>
//             </div>
//             <a
//               href="/case-studies/tops"
//               className="inline-flex items-center text-yellow font-semibold mt-4 hover:underline"
//             >
//               Read Case Study <span className="ml-2">&rarr;</span>
//             </a>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.8 }}
//             className="flex justify-center"
//           >
//             <Image
//               src="/assets/cont.svg"
//               alt="Tops Case Study"
//               width={400}
//               height={400}
//               className="rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudySection;




"use client";
// File: components/CaseStudySection.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';

const CaseStudySection = () => {
  return (
    <section className="bg-gray-900 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 sm:mb-12">
          <Image src="/logos/parkplus.png" alt="Park+" width={100} height={50} className="w-24 sm:w-28" />
          <Image src="/assets/piramal-new.svg" alt="Piramal" width={100} height={50} className="w-24 sm:w-28" />
          <Image src="/assets/adani_logo.png" alt="Adani" width={100} height={50} className="w-24 sm:w-28" />
          <Image src="/logos/rvshare.png" alt="RVshare" width={100} height={50} className="w-24 sm:w-28" />
          <Image src="/logos/rvshare.png" alt="Apollo 247" width={100} height={50} className="w-24 sm:w-28" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center md:text-left"
          >
            <p className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Featured Case Study
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
              "Reimagining a Legacy: Redefining Top's India Brand Identity and Strategy
              for the Modern Consumer"
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 justify-center md:justify-start">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-400">250%</p>
                <p className="text-xs sm:text-sm text-gray-300">Increase in Click Rate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-400">192k+</p>
                <p className="text-xs sm:text-sm text-gray-300">Leads Generated with Creatives</p>
              </div>
            </div>
            <a
              href="/case-studies/tops"
              className="inline-flex items-center text-yellow-400 font-semibold mt-4 hover:underline"
            >
              Read Case Study <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/cont.svg"
              alt="Tops Case Study"
              width={400}
              height={400}
              className="w-3/4 sm:w-2/3 md:w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
