// // Services.tsx
// export default function Services() {
//     const services = [
//       "Graphic Design",
//       "Content Writing",
//       "UI/UX Design",
//       "Video Production",
//       "Packaging Design",
//     ];
//     return (
//       <section id="services" className="py-12">
//         <div className="container mx-auto">
//           <h2 className="text-2xl font-bold mb-6">Our Services</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.map((service, index) => (
//               <div key={index} className="p-4 border rounded shadow">
//                 {service}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }


"use client";
import { motion } from "framer-motion";

export default function TakeAdvantageSection() {
  const items = [
    {
      title: "Logo Design",
      description:
        "Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience.",
      icon: "/assets/open-book.png",
    },
    {
      title: "Brand Identity Design",
      description:
        "Developing complete branding elements, including color palettes, typography, and visual style guidelines.",
      icon: "/assets/open-book.png",
    },
    {
      title: "Social Media Graphics",
      description:
        "Creating visually engaging graphics for social media posts, ads, stories, and banners.",
      icon: "/assets/open-book.png",
    },
    {
      title: "Website and App Graphics",
      description:
        "Designing UI/UX visuals, icons, and elements for websites and mobile applications.",
      icon: "/assets/open-book.png",
    },
    {
      title: "Infographics",
      description:
        "Converting complex data and information into visually appealing and easy-to-understand infographics.",
      icon: "/assets/open-book.png",
    },
    {
      title: "Ad Banners",
      description:
        "Develop eye-catching ad banners optimized for digital campaigns to maximize clicks and conversions.",
      icon: "/assets/open-book.png",
    },
    {
      title: "Motion Graphics and GIFs",
      description: ".....",
      icon: "/images/icon-motion-graphics.png",
    },
    {
      title: "Brochure & Flyers",
      description:
        "Design informative and visually appealing brochures and flyers that effectively convey your message and promote your business.",
      icon: "/images/icon-brochures.png",
    },
    {
      title: "Illustration Services",
      description:
        "Producing custom illustrations tailored to enhance brand communication and storytelling.",
      icon: "/images/icon-illustration.png",
    },
    {
      title: "Presentation Design",
      description:
        "Create compelling PowerPoint templates and pitch decks that captivate audiences and communicate your message effectively.",
      icon: "/images/icon-presentation.png",
    },
    {
      title: "Advertising Design",
      description:
        "Designing print and digital ads, including billboards, banners, and magazine layouts, for impactful campaigns.",
      icon: "/images/icon-advertising.png",
    },
    {
      title: "Ebook and Publication",
      description:
        "Designing layouts for ebooks, magazines, and newsletters with consistent and appealing visual aesthetics.",
      icon: "/images/icon-ebook.png",
    },
    {
      title: "Menu Design",
      description:
        "Crafting attractive and easy-to-navigate menus for restaurants, cafes, or events.",
      icon: "/images/icon-menu.png",
    },
    {
      title: "Poster and Banner Design",
      description:
        "Creating impactful posters and banners for promotions, events, or campaigns.",
      icon: "/images/icon-poster-banner.png",
    },
    {
      title: "Custom Typography Design",
      description:
        "Creating unique fonts and typography tailored to brand requirements.",
      icon: "/images/icon-typography.png",
    },
    {
      title: "Book Cover Design",
      description:
        "Crafting visually appealing and market-relevant book covers for print and digital publications.",
      icon: "/images/icon-book-cover.png",
    },
    {
      title: "UI Icon Design",
      description:
        "Crafting consistent, functional, and aesthetically pleasing icons for apps and websites.",
      icon: "/images/icon-ui-icon.png",
    },
    {
      title: "Brand Asset Creation",
      description:
        "Developing a library of cohesive design assets to ensure consistent branding across platforms.",
      icon: "/images/icon-brand-assets.png",
    },
  ];

  return (
    <motion.section
      id="take-advantage"
      className="bg-gray-100 py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take Advantage
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg text-gray-600 font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="mt-8 mx-auto block bg-blue-600  text-white py-2 px-6 rounded hover:bg-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: items.length * 0.1 + 0.2 }}
        >
          Show Less
        </motion.button>
      </div>
    </motion.section>
  );
}
