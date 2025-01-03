
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CreativeTalentSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 px-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex space-x-6 mb-4">
            <span className="text-blue-600 font-bold cursor-pointer border-b-2 border-blue-600">For Candidates</span>
            <span className="text-gray-500 cursor-pointer">For Enterprises</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
            Scale your Teams Faster by Hiring the <span className="text-blue-600">Top 1%</span> Skilled Creative Talent.
          </h1>
          <p className="text-gray-700 mb-6">
            Join an exclusive talent pool and connect with leading brands, searching for top creative professionals. Showcase your expertise, land your dream role, and redefine your career with endless opportunities.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Get Placed with Top Brands Like Google and Amazon.</li>
            <li>Showcase Your Creative Talent to the World.</li>
            <li>Get Hired for Projects That Elevate Your Career.</li>
          </ul>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            Become Talent
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 px-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-4">Welcome Ashish!</h3>
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Design Services</h4>
              <ul className="text-gray-600">
                <li className="mb-1">Product Design</li>
                <li className="mb-1">Packaging Design</li>
                <li className="mb-1">Graphic Design</li>
                <li className="mb-1">Video Production</li>
                <li className="mb-1">Content Writing</li>
                <li className="mb-1">UX/UI Design</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center border p-2 rounded-lg">
                <Image src="/profiles/anika-verma.jpg" alt="Anika Verma" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-bold">Anika Verma</p>
                  <p className="text-sm text-gray-500">Packaging Designer</p>
                </div>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <Image src="/profiles/arnav-mehta.jpg" alt="Arnav Mehta" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-bold">Arnav Mehta</p>
                  <p className="text-sm text-gray-500">Illustrator</p>
                </div>
              </div>
              <div className="flex items-center border p-2 rounded-lg bg-blue-50 border-blue-600">
                <Image src="/assets/loginimage.svg" alt="Kanika Jain" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-bold">Kanika Jain</p>
                  <p className="text-sm text-gray-500">Product Designer</p>
                </div>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <Image src="/profiles/shaan-desai.jpg" alt="Shaan Desai" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-bold">Shaan Desai</p>
                  <p className="text-sm text-gray-500">Animator</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeTalentSection;



