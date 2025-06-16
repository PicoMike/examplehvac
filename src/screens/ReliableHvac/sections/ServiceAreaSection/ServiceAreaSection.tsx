import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Map } from "../../../../components/ui/map";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ServiceAreaSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  // Service areas data for mapping
  const serviceAreas = [
    { name: "Lower Manhattan", column: 1 },
    { name: "Financial District", column: 1 },
    { name: "East village", column: 1 },
    { name: "Jersey City", column: 2 },
  ];

  return (
    <section className="w-full bg-[#16181d] border-b-2 border-[#ff5722] py-14">
      <motion.div 
        ref={ref}
        className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
      >
        <motion.div 
          className="md:w-1/3"
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
          }}
        >
          <Map className="w-[450px] h-[450px] rounded-lg shadow-lg" />
        </motion.div>

        <Card className="md:w-2/3 bg-transparent border-none">
          <CardContent className="p-0">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ x: 100, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
              }}
            >
              <Separator className="w-[35px] bg-[#ff5722]" />
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#ff5722] text-[16.1px] tracking-[-0.16px] leading-[20.8px]">
                AREA
              </span>
            </motion.div>

            <motion.h2 
              className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[55.5px] tracking-[-0.28px] leading-[66.6px] mb-12"
              initial={{ x: 100, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
              }}
            >
              WHERE WE OPERATE
            </motion.h2>

            <motion.p 
              className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-[17.4px] tracking-[0.26px] leading-[20.9px] mb-8"
              initial={{ x: 100, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
              }}
            >
              We provide expert HVAC services across New York and over
              <br />
              Jersey City.
              <br />
              From small repairs to large projects, we deliver reliable and{" "}
              <br />
              efficient solutions wherever you need us.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-x-16 gap-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  transition: { 
                    duration: 0.8, 
                    delay: 0.6,
                    staggerChildren: 0.1
                  } 
                }
              }}
            >
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="font-sub-texts font-[number:var(--sub-texts-font-weight)] text-white text-[length:var(--sub-texts-font-size)] tracking-[var(--sub-texts-letter-spacing)] leading-[var(--sub-texts-line-height)] whitespace-nowrap [font-style:var(--sub-texts-font-style)] hover:text-[#ff5722] transition-colors duration-300 cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  • {area.name}
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};