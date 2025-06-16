import { ClockIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { SocialIcons } from "../../../../components/ui/social-icons";
import { PhoneButton } from "../../../../components/ui/phone-button";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "About Us", href: "#about" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[720px]">
      {/* Top bar with social media icons and 24/7 availability */}
      <motion.div 
        className="relative w-full h-[42px] bg-[#16181d] border-b border-solid border-[#bfbfbf]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-full">
          <SocialIcons />
          <motion.div 
            className="flex items-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ClockIcon className="w-[21px] h-[22px] mr-2 text-white" />
            <span className="font-['Open_Sans',Helvetica] font-normal text-white text-[15.1px] tracking-[0.45px]">
              Available 24/7
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation bar */}
      <motion.div 
        className="relative w-full h-[78px]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="w-full h-[75px] bg-white shadow-[0px_4px_4px_#000000d9] flex items-center">
          <div className="container mx-auto px-6 flex items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-[62px] h-[78px]"
                alt="Elevated HVAC Logo"
                src="/image-removebg-preview--4--2.png"
              />
              <div className="ml-2 font-['Poppins',Helvetica] font-normal text-black text-[18.4px]">
                Elevated HVAC
              </div>
            </motion.div>

            <div className="ml-24 flex items-center">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="font-['Open_Sans',Helvetica] font-normal text-black text-[16.1px] tracking-[0.48px] mx-6 hover:text-[#ff5722] transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.label}
                  </motion.a>
                  {index === 2 && (
                    <img
                      className="w-0.5 h-7"
                      alt="Divider"
                      src="/line-4.svg"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="ml-auto">
              <PhoneButton />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero section with background image and content */}
      <div className="relative w-full h-[603px]">
        <img
          className="w-full h-[603px] object-cover"
          alt="HVAC technician service"
          src="/hvac-technician-service-----urgent-hvac-in-your-area--near-me---.png"
        />

        <div className="absolute inset-0 border-b-2 border-[#ff5722] bg-gradient-to-r from-[rgba(22,24,29,0.85)] to-transparent">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="max-w-[620px]">
              <motion.div 
                className="flex items-center mb-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  className="w-[35px] h-px object-cover"
                  alt="Line"
                  src="/line-5.svg"
                />
                <span className="ml-2 font-['Open_Sans',Helvetica] font-bold text-[#ff5722] text-[16.1px] tracking-[-0.16px]">
                  HVAC NEW YORK
                </span>
              </motion.div>

              <motion.h1 
                className="font-['Space_Grotesk',Helvetica] font-medium text-white text-[60.2px] tracking-[-0.30px] leading-[72px] mb-12"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                RELIABLE HVAC <br />
                SERVICES, WHENEVER <br />
                YOU NEED THEM
              </motion.h1>

              <motion.p 
                className="text-shadow-[0px_4px_4px_#00000040] font-['Open_Sans',Helvetica] font-normal text-white text-[18.4px] leading-[18.4px] mb-12"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="tracking-[0] leading-[0.1px]">
                  24/7 Emergency Service: Broken AC? No Heat? Get
                </span>
                <span className="font-['Roboto',Helvetica] tracking-[0.05px] leading-[25.8px]">
                  &nbsp;
                </span>
                <span className="font-semibold tracking-[0] leading-[25.8px]">
                  Same-Day Repairs or Pay $0
                </span>
              </motion.p>

              <motion.div 
                className="flex space-x-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <PhoneButton />

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="relative w-[203px] h-[49px] rounded-[30px] border border-solid border-white hover:bg-white hover:text-[#16181d] transition-all duration-300"
                    onClick={() => scrollToSection('#contact')}
                  >
                    <span className="font-['Inter',Helvetica] font-medium text-[16.1px]">
                      SCHEDULE ONLINE
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};