import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ClientTestimonialsSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      text: "Fantastic service! The team was prompt, professional, and fixed our wiring issue in no time. They even provided useful tips to prevent future problems. Highly recommend for anyone needing reliable HVAC work.",
      author: "John R",
      location: "Chicago, IL",
      avatar: "/ellipse-3.png",
    },
    {
      id: 2,
      text: "We had a full panel upgrade, and the engineers were amazing. They explained everything clearly, kept the area clean, and the job was done right the first time. Couldn't be happier with the results!",
      author: "Emily S",
      location: "Dallas, TX",
      avatar: "/ellipse-3-1.png",
    },
    {
      id: 3,
      text: "Called them for an emergency at night, and they arrived within 30 minutes. The issue was resolved quickly and efficiently. Exceptional service and fair pricing. I'm glad to have found a dependable experts!",
      author: "Michael T.",
      location: "Chicago, IL",
      avatar: "/ellipse-4.png",
    },
  ];

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
    <section className="relative w-full bg-[#16181d] border-b-2 border-[#ff5722] py-20" id="testimonials">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="flex items-center mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          <img
            className="w-[35px] h-px object-cover mr-6"
            alt="Line"
            src="/line-15.svg"
          />
          <div className="font-sub-head2 text-[#ff5722] text-[length:var(--sub-head2-font-size)] tracking-[var(--sub-head2-letter-spacing)] leading-[var(--sub-head2-line-height)] [font-style:var(--sub-head2-font-style)]">
            TESTIMONIALS
          </div>
        </motion.div>

        <motion.h2 
          className="font-SUBHEAD text-white text-[length:var(--SUBHEAD-font-size)] tracking-[var(--SUBHEAD-letter-spacing)] leading-[var(--SUBHEAD-line-height)] [font-style:var(--SUBHEAD-font-style)] mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
          }}
        >
          WE HELPED THESE CLIENTS
        </motion.h2>

        {/* Testimonial cards */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="flex flex-col h-full"
              variants={cardVariants}
            >
              <Card className="bg-[#3d3d3d] rounded-[20px] border-none mb-4 hover:bg-[#4a4a4a] transition-colors duration-300 group">
                <CardContent className="pt-6 px-11">
                  {/* Star rating */}
                  <div className="flex mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.img
                        key={star}
                        className="w-[17px] h-[17px] mr-[6px]"
                        alt="Star"
                        src="/star-2.svg"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="font-testimonial text-white text-[length:var(--testimonial-font-size)] tracking-[var(--testimonial-letter-spacing)] leading-[var(--testimonial-line-height)] [font-style:var(--testimonial-font-style)] group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>

              {/* Author card */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="bg-[#e1e1e1] rounded-[15px] border-none mt-auto hover:bg-white transition-colors duration-300">
                  <CardContent className="p-0 flex items-center">
                    <Avatar className="w-[50px] h-[50px] ml-[11px] my-[18px]">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-[14px]">
                      <p className="[font-family:'Space_Grotesk',Helvetica] font-medium text-black text-[20.4px] tracking-[-0.20px] leading-[20.8px]">
                        {testimonial.author}
                      </p>
                      <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#7f7f7f] text-base tracking-[0.24px] leading-[20.8px]">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* More testimonials button */}
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#ff5722] text-white rounded-[30px] h-[49px] px-5 hover:bg-[#e64a14] transition-colors duration-300">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[17.4px] tracking-[-0.17px] leading-[20.8px] mr-4">
                More Testimonials
              </span>
              <motion.span 
                className="flex items-center justify-center w-[39px] h-[39px] bg-[#16181d] rounded-full"
                whileHover={{ rotate: 15 }}
              >
                <ArrowRightIcon className="w-[18px] h-[15px]" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};