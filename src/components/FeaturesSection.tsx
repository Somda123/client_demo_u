"use client";
import { motion } from 'framer-motion';

// FeaturesSection.tsx
export function FeaturesSection() {
    const features = [
      {
        title: "Punctuality Meets Perfection",
        description: "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
        icon: "/assets/punctual.png", // Replace with actual icon paths if needed
      },
      {
        title: "Showcase Your Brand’s Personality",
        description: "Whether it’s minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
        icon: "/images/icon-brand-personality.png", // Replace with actual icon paths if needed
      },
      {
        title: "Engage with Strategic Visuals",
        description: "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
        icon: "/images/icon-strategic-visuals.png", // Replace with actual icon paths if needed
      },
    ];
  
    return (
      <motion.section
        id="features"
        className="bg-gray-900 text-white py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engaging Visual Creatives That Drive Results
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg text-center flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
  