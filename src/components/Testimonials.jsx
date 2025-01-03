
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl text-black  font-bold mb-8">Clients are Pitching about us.</h2>
        <div className="flex justify-center items-center mb-8">
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-black mr-4">
            &#8592;
          </button>
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-black text-white">
            &#8594;
          </button>
        </div>

        <motion.div
          className="grid grid-cols-4 gap-6"
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className="text-blue-500">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4">"Text"</p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                <div className="text-left">
                  <p className="text-sm font-bold">Ank Jain</p>
                  <p className="text-xs text-gray-500">Designer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
