import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ServicesOverviewSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  // Service card data for mapping
  const serviceCards = [
    {
      title: "AC Repair & Installation",
      description: '"Fast fixes and energy-efficient cooling solutions."',
      icon: "/air-conditioner.png",
      alt: "Air conditioner",
    },
    {
      title: "Heating System Services",
      description:
        '"Furnace repairs, boiler installations, and cozy winters guaranteed."',
      icon: "/air-conditioner-1.png",
      alt: "Air conditioner",
    },
    {
      title: "24/7 Emergency Repairs",
      description:
        '"No after-hours fees – we\'re there when disaster strikes."',
      icon: "/air-conditioner-2.png",
      alt: "Air conditioner",
    },
    {
      title: "Preventive Maintenance",
      description:
        '"Avoid breakdowns with annual tune-ups and priority service."',
      icon: "/paperwork.png",
      alt: "Paperwork",
    },
    {
      title: "Duct Cleaning & Sealing",
      description: '"Boost efficiency and breathe cleaner air."',
      icon: "/pipe.png",
      alt: "Pipe",
    },
    {
      title: "Indoor Air Quality Solutions",
      description: '"Humidifiers, air purifiers, and allergen-free living."',
      icon: "/interior.png",
      alt: "Interior",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full max-w-[1104px] mx-auto py-12" id="services">
      <motion.div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {serviceCards.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="shadow-drop-1 h-[262px] flex flex-col items-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-full pt-7 px-4">
                <motion.img
                  className="w-[60px] h-[60px] mb-10"
                  alt={service.alt}
                  src={service.icon}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="font-sub-head font-[number:var(--sub-head-font-weight)] text-[#16181d] text-[length:var(--sub-head-font-size)] tracking-[var(--sub-head-letter-spacing)] leading-[var(--sub-head-line-height)] text-center mb-6 group-hover:text-[#ff5722] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {service.title}
                </motion.div>
                <motion.div 
                  className="font-sub-texts font-[number:var(--sub-texts-font-weight)] text-[#16181d] text-[length:var(--sub-texts-font-size)] text-center tracking-[var(--sub-texts-letter-spacing)] leading-[var(--sub-texts-line-height)] [font-style:var(--sub-texts-font-style)] max-w-[185px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {service.description}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};