import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const AboutUsSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="relative w-full py-16 bg-[#16181d] border-b-2 border-[#ff5722]" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="flex flex-col lg:flex-row"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } }
          }}
        >
          {/* Left Content */}
          <motion.div 
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            <div className="flex items-center mb-6">
              <span className="font-sub-head2 text-[#ff5722] text-[length:var(--sub-head2-font-size)] tracking-[var(--sub-head2-letter-spacing)] leading-[var(--sub-head2-line-height)] [font-style:var(--sub-head2-font-style)]">
                ABOUT US
              </span>
              <Separator className="w-[35px] h-px ml-4 bg-[#ff5722]" />
            </div>

            <motion.h2 
              className="font-SUBHEAD text-white text-[length:var(--SUBHEAD-font-size)] tracking-[var(--SUBHEAD-letter-spacing)] leading-[var(--SUBHEAD-line-height)] [font-style:var(--SUBHEAD-font-style)] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
              }}
            >
              PROVEN EXPERTISE <br />
              YOU CAN TRUST
            </motion.h2>

            <motion.p 
              className="font-sub-texts text-white text-[length:var(--sub-texts-font-size)] tracking-[var(--sub-texts-letter-spacing)] leading-[var(--sub-texts-line-height)] [font-style:var(--sub-texts-font-style)] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
              }}
            >
              With over a decade and a half of hands-on experience, <br />
              we&apos;ve mastered the art of delivering top-quality HVAC <br />
              services that consistently exceed expectations.
              <br />
              <br />
              From complex troubleshooting and minor repairs to <br />
              comprehensive installations and system upgrades, we <br />
              ensure that every job is completed to the highest <br />
              standards —right the first time, every time.
            </motion.p>

            <motion.div 
              className="flex items-center cursor-pointer group"
              initial={{ opacity: 0, x: -30 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } }
              }}
              whileHover={{ x: 10 }}
            >
              <span className="font-sub-head2 text-[#ff5722] text-[length:var(--sub-head2-font-size)] tracking-[var(--sub-head2-letter-spacing)] leading-[var(--sub-head2-line-height)] [font-style:var(--sub-head2-font-style)]">
                Learn More
              </span>
              <motion.img
                className="w-[31px] h-[15px] ml-2"
                alt="Arrow"
                src="/arrow-2.svg"
                whileHover={{ x: 5 }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content with Image and Experience Card */}
          <motion.div 
            className="flex-1 relative mt-10 lg:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
            }}
          >
            <div className="relative">
              {/* Decorative lines */}
              <div className="absolute top-0 left-[355px] flex space-x-6">
                <Separator
                  orientation="vertical"
                  className="h-32 bg-white/20"
                />
                <Separator
                  orientation="vertical"
                  className="h-32 bg-white/20"
                />
              </div>

              <div className="absolute top-0 left-[380px] flex space-x-6">
                <Separator
                  orientation="vertical"
                  className="h-[127px] bg-white/20"
                />
                <Separator
                  orientation="vertical"
                  className="h-[127px] bg-white/20"
                />
                <Separator
                  orientation="vertical"
                  className="h-[127px] bg-white/20"
                />
              </div>

              {/* Main image */}
              <motion.img
                className="w-full max-w-[651px] h-auto ml-auto"
                alt="Home hero"
                src="/home-hero-1.png"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Experience card */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={controls}
                variants={{
                  hidden: { scale: 0, rotate: -10 },
                  visible: { 
                    scale: 1, 
                    rotate: 0, 
                    transition: { 
                      duration: 0.8, 
                      delay: 0.6,
                      type: "spring",
                      stiffness: 100
                    } 
                  }
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="absolute bottom-0 left-0 w-[184px] h-[252px] bg-[#ff5722] rounded-[30px_30px_0px_0px] border-none shadow-xl">
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <motion.img
                      className="w-[55px] h-[60px] mb-4"
                      alt="Graduation cap"
                      src="/graduation-cap.png"
                      whileHover={{ rotate: 15 }}
                    />
                    <h3 className="font-sub-head text-black text-[length:var(--sub-head-font-size)] tracking-[var(--sub-head-letter-spacing)] leading-[var(--sub-head-line-height)] [font-style:var(--sub-head-font-style)] text-center">
                      15 Years
                    </h3>
                    <p className="font-sub-texts text-black text-[length:var(--sub-texts-font-size)] text-center tracking-[var(--sub-texts-letter-spacing)] leading-[var(--sub-texts-line-height)] [font-style:var(--sub-texts-font-style)]">
                      Of experience in HVAC work
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};