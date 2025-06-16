import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

// Feature card data for mapping
const featureCards = [
  {
    id: 1,
    icon: "/clock-2.png",
    title: "Swift Response",
    description: "Count on us for prompt service when you need it the most",
  },
  {
    id: 2,
    icon: "/tools.png",
    title: "Trusted Expert",
    description:
      "Our engineers are certified and experienced ensuring top quality work.",
  },
  {
    id: 3,
    icon: "/lock.png",
    title: "Safety First",
    description:
      "We prioritize safety in every project, keeping your home or business secure.",
  },
  {
    id: 4,
    icon: "/wallet.png",
    title: "Affordable Solutions",
    description: "High Quality services at prices that work for you.",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="relative w-full py-16 bg-[#fffafa] border-b-2 border-[#ff5722]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <div className="flex items-center mb-2">
            <img
              className="w-[35px] h-px object-cover"
              alt="Line"
              src="/line-15.svg"
            />
            <span className="ml-3 font-['Open_Sans',Helvetica] font-semibold text-[#ff5722] text-[16.1px] tracking-[-0.16px]">
              WHY US ?
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <h2 className="font-SUBHEAD font-[number:var(--SUBHEAD-font-weight)] text-[#16181d] text-[length:var(--SUBHEAD-font-size)] tracking-[var(--SUBHEAD-letter-spacing)] leading-[var(--SUBHEAD-line-height)] [font-style:var(--SUBHEAD-font-style)] mb-6 md:mb-0">
              RELIABLE AND <br />
              EFFICIENT
            </h2>

            <p className="font-['Open_Sans',Helvetica] font-normal text-black text-[16.4px] tracking-[0.25px] leading-[20.8px] max-w-xl">
              We understand that when it comes to HVAC issues, you need fast and{" "}
              <br />
              effective solutions. Our skilled team delivers reliable service
              that&apos;s always <br />
              focused on safety, quality, and efficiency.
            </p>
          </div>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featureCards.map((card) => (
            <motion.div key={card.id} variants={cardVariants}>
              <Card className="bg-[#f1f1f1] rounded-[20px] border border-solid border-[#d0d0d0] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 relative">
                  <motion.div 
                    className="w-[53px] h-[52px] bg-[#16181d] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img className="w-10 h-10" alt={card.title} src={card.icon} />
                  </motion.div>

                  <h3 className="font-sub-head font-[number:var(--sub-head-font-weight)] text-[#16181d] text-[length:var(--sub-head-font-size)] tracking-[var(--sub-head-letter-spacing)] leading-[var(--sub-head-line-height)] [font-style:var(--sub-head-font-style)] mb-4 group-hover:text-[#ff5722] transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="font-sub-texts font-[number:var(--sub-texts-font-weight)] text-black text-[length:var(--sub-texts-font-size)] tracking-[var(--sub-texts-letter-spacing)] leading-[var(--sub-texts-line-height)] [font-style:var(--sub-texts-font-style)] mb-10">
                    {card.description}
                  </p>

                  <motion.div 
                    className="absolute bottom-8 left-8 flex items-center cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <span className="font-sub-head2 font-[number:var(--sub-head2-font-weight)] text-[#ff5722] text-[length:var(--sub-head2-font-size)] tracking-[var(--sub-head2-letter-spacing)] leading-[var(--sub-head2-line-height)] [font-style:var(--sub-head2-font-style)]">
                      Learn More
                    </span>
                    <motion.img
                      className="w-[31px] h-[15px] ml-2"
                      alt="Arrow"
                      src="/arrow-2.svg"
                      whileHover={{ x: 5 }}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};