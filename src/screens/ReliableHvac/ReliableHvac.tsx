import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { HeroSection } from "./sections/HeroSection";
import { ServiceAreaSection } from "./sections/ServiceAreaSection/ServiceAreaSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { PhoneButton } from "../../components/ui/phone-button";
import { SocialIcons } from "../../components/ui/social-icons";
import { AnimatedCounter } from "../../components/ui/animated-counter";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ReliableHvac = (): JSX.Element => {
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();
  const { ref: testimonialsRef, controls: testimonialsControls } = useScrollAnimation();
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation();

  // Testimonial data
  const testimonials = [
    {
      image: "/image-14.png",
      title: "Elevated HVAC helped me so fast!",
      text: '"Super friendly and got everything working perfectly. Will definitely call again!"',
    },
    {
      image: "/image-15.png",
      title: "Top-notch service from start to finish!",
      text: '"Elevated HVAC\'s team was professional, punctual, and got the job done right the first time."',
    },
  ];

  // Stats data
  const stats = [
    { value: 20, suffix: "+", label: "Certifications" },
    { value: 6000, suffix: "+", label: "Completed jobs" },
    { value: 24, suffix: "/7", label: "Emergency availability" },
  ];

  // Footer pages data
  const pages = ["About", "Services", "FAQ", "Testimonials", "Blog", "Contact"];

  // Footer contact data
  const contactInfo = [
    { icon: "/location.png", text: "123 NY Street, New York" },
    { icon: "/call-1.png", text: "(555) 123-4567" },
    { icon: "/email.png", text: "elevatedhvac@gmail.com" },
    { icon: "/clock.png", text: "Available 24/7" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#16181d] flex flex-row justify-center w-full">
      <div className="bg-[#16181d] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Testimonials Strip */}
        <motion.div 
          ref={testimonialsRef}
          className="w-full bg-[#16181d] border-b-2 border-[#ff0000] py-16"
          initial={{ opacity: 0 }}
          animate={testimonialsControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } }
          }}
        >
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={testimonialsControls}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.8, delay: index * 0.2 } 
                  }
                }}
              >
                <motion.img
                  className="w-[93px] object-contain"
                  alt="Customer"
                  src={testimonial.image}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="flex flex-col">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.img
                        key={i}
                        className="w-[17px] h-4"
                        alt="Star"
                        src="/star-2.svg"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                  <h3 className="font-sub-head text-white mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="font-sub-texts text-white">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          ref={servicesRef}
          className="w-full bg-white border-b-2 border-[#ff5722] py-16"
          initial={{ opacity: 0 }}
          animate={servicesControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } }
          }}
        >
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div 
                className="lg:col-span-1"
                initial={{ x: -100, opacity: 0 }}
                animate={servicesControls}
                variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    className="w-[35px] h-px mr-2"
                    alt="Line"
                    src="/line-15.svg"
                  />
                  <span className="font-['Open_Sans',Helvetica] font-semibold text-[#ff5722] text-[16.1px] tracking-[-0.16px] leading-[25.8px]">
                    OUR SERVICES
                  </span>
                </div>
                <h2 className="font-['Space_Grotesk',Helvetica] font-medium text-[#16181d] text-[55.5px] tracking-[-0.56px] leading-[1.2] mb-8">
                  WHAT WE DO ?
                </h2>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="mt-8 bg-[#ff5722] text-white rounded-[30px] h-[49px] px-6 relative hover:bg-[#e64a14] transition-colors duration-300">
                    <span className="font-['Space_Grotesk',Helvetica] font-medium text-[17.4px] tracking-[-0.17px]">
                      ALL SERVICES
                    </span>
                    <motion.div 
                      className="w-[39px] h-[39px] ml-4 bg-[#16181d] rounded-[19.5px] flex items-center justify-center"
                      whileHover={{ rotate: 15 }}
                    >
                      <img
                        className="w-[18px] h-[15px]"
                        alt="Arrow"
                        src="/arrow-2.svg"
                      />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="lg:col-span-2"
                initial={{ x: 100, opacity: 0 }}
                animate={servicesControls}
                variants={{
                  hidden: { x: 100, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
                }}
              >
                <p className="font-['Open_Sans',Helvetica] font-normal text-[#1c1c1c] text-[16.4px] tracking-[0.25px] leading-[20.8px] mb-8">
                  Your trusted partner for all HVAC needs – reliable, <br />
                  skilled, and timely solutions you can count on.
                </p>
                <ServicesOverviewSection />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Service Area Section */}
        <ServiceAreaSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="w-full bg-white border-b-2 border-[#ff5722] py-8"
          initial={{ opacity: 0 }}
          animate={statsControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } }
          }}
        >
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsControls}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.8, delay: index * 0.2 } 
                    }
                  }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="font-SUBHEAD text-black text-[55.52px] tracking-[-0.56px] leading-[66.62px]"
                  />
                  <span className="font-sub-head2 text-black text-[16.13px] tracking-[-0.16px]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Banner */}
        <div className="w-full bg-[#ff5722] py-3 overflow-hidden">
          <div className="container">
            <div className="flex justify-center items-center">
              <motion.div 
                className="flex space-x-8"
                animate={{ x: [0, -200] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...Array(9)].map((_, index) => (
                  <span
                    key={index}
                    className={`font-sub-head text-black whitespace-nowrap ${index === 4 ? "opacity-90" : ""}`}
                  >
                    Contact Us • Call Now • 24/7 Service
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <ClientTestimonialsSection />

        {/* Footer */}
        <footer className="w-full bg-white py-16" id="contact">
          <div className="container px-4">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-SUBHEAD text-black mb-8">
                LET US SOLVE YOUR HVAC PROBLEMS
              </h2>
              <div className="flex justify-between items-center">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  onClick={scrollToTop}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="w-12 h-[61px]"
                    alt="Logo"
                    src="/image-removebg-preview--4--3.png"
                  />
                  <span className="ml-3 font-['Space_Grotesk',Helvetica] font-bold text-black text-[18.1px] tracking-[0.36px]">
                    ELEVATED HVAC
                  </span>
                </motion.div>
                <PhoneButton className="h-[57px]" />
              </div>
            </motion.div>

            <Separator className="my-8" />

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="font-['Open_Sans',Helvetica] font-normal text-[#333333] text-[17.4px] tracking-[0.26px] leading-[20.8px] mb-6">
                  Expert solutions for all your HVAC
                  <br />
                  needs – fast, safe, and efficient.
                </p>
                <SocialIcons 
                  className="mt-4" 
                  iconSize="w-8 h-8"
                />
              </div>

              <div>
                <h3 className="font-['Space_Grotesk',Helvetica] font-medium text-black text-[17.4px] tracking-[-0.17px] mb-6">
                  PAGES
                </h3>
                <ul className="space-y-4">
                  {pages.map((page, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                    >
                      <a 
                        href="#" 
                        className="font-footersubtxt text-black hover:text-[#ff5722] transition-colors duration-300"
                      >
                        {page}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-['Space_Grotesk',Helvetica] font-medium text-black text-[17.4px] tracking-[-0.17px] mb-6">
                  CONTACT
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <img
                        className="w-[27px] h-[27px] mr-2"
                        alt="Icon"
                        src={item.icon}
                      />
                      <span className="font-footersubtxt text-black">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <Separator className="my-8" />
            
            <motion.div 
              className="text-center text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © 2024 Elevated HVAC. All rights reserved. | Professional HVAC Services in New York
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
};