/* eslint-disable react/prop-types */
import React from "react";
import "./aboutUs.css";
import { Box, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

function AboutUs({ activeIndex, visitedSlides }) {
  const sentence = "Discover The Journey Behind Our Brand"; // Your text
  const words = sentence.split(" ");

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#4f4f4f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          color: "white",
          textAlign: "left",
          marginLeft: "10px !important",
        }}
      >
        <AnimatePresence>
          <Box
            sx={{
              position: "relative",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 10,
              marginLeft: {
                xs: "20px",
                sm: "135px",
              },
            }}
          >
            <div className="aboutUsTitle">
              <motion.span
                initial={{ width: 0 }}
                animate={
                  visitedSlides.has(1)
                    ? { width: "50px" } // No animation if already visited
                    : activeIndex === 1
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(1)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 1
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                {" "}
                About Us
              </motion.div>
            </div>
            <div className="aboutUsText">
              {words.map((word, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                >
                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    viewport={{ once: true }}
                    animate={
                      visitedSlides.has(1)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 1
                        ? {
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{ duration: 0.7, delay: 1.4 + 0.2 * index }}
                  >
                    {word + " "}
                  </motion.span>
                </div>
              ))}
            </div>

            <Box className="aboutUsDescription">
              <motion.p
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(1)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 1
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 2.5 }}
                viewport={{ once: true }}
              >
                We are a team of dedicated professionals committed to providing
                top-notch services to our clients. Our mission is to deliver
                innovative solutions that meet the unique needs of each client.
                <br />
                Our team consists of experts in various fields, including
                technology, design, and marketing. We work collaboratively to
                ensure that every project is executed with precision and
                excellence.
                <br />
                We believe in the power of creativity and innovation to drive
                success. Our approach is centered around understanding our
                clients' goals and challenges, allowing us to develop tailored
                strategies that deliver results.
              </motion.p>
            </Box>
          </Box>
        </AnimatePresence>
        <Box
          sx={{
            position: "absolute",
            bottom: "-7px",
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          <svg
            id="wave"
            viewBox="0 0 1440 190"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(12.473, 0, 52.757, 1)" offset="0%"></stop>
                <stop
                  stopColor="rgba(25.045, 0, 148.489, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,76L120,91.8C240,108,480,139,720,129.8C960,120,1200,70,1440,66.5C1680,63,1920,108,2160,104.5C2400,101,2640,51,2880,47.5C3120,44,3360,89,3600,88.7C3840,89,4080,44,4320,22.2C4560,0,4800,0,5040,0C5280,0,5520,0,5760,9.5C6000,19,6240,38,6480,41.2C6720,44,6960,32,7200,25.3C7440,19,7680,19,7920,41.2C8160,63,8400,108,8640,110.8C8880,114,9120,76,9360,76C9600,76,9840,114,10080,123.5C10320,133,10560,114,10800,95C11040,76,11280,57,11520,53.8C11760,51,12000,63,12240,82.3C12480,101,12720,127,12960,142.5C13200,158,13440,165,13680,152C13920,139,14160,108,14400,85.5C14640,63,14880,51,15120,41.2C15360,32,15600,25,15840,25.3C16080,25,16320,32,16560,44.3C16800,57,17040,76,17160,85.5L17280,95L17280,190L17160,190C17040,190,16800,190,16560,190C16320,190,16080,190,15840,190C15600,190,15360,190,15120,190C14880,190,14640,190,14400,190C14160,190,13920,190,13680,190C13440,190,13200,190,12960,190C12720,190,12480,190,12240,190C12000,190,11760,190,11520,190C11280,190,11040,190,10800,190C10560,190,10320,190,10080,190C9840,190,9600,190,9360,190C9120,190,8880,190,8640,190C8400,190,8160,190,7920,190C7680,190,7440,190,7200,190C6960,190,6720,190,6480,190C6240,190,6000,190,5760,190C5520,190,5280,190,5040,190C4800,190,4560,190,4320,190C4080,190,3840,190,3600,190C3360,190,3120,190,2880,190C2640,190,2400,190,2160,190C1920,190,1680,190,1440,190C1200,190,960,190,720,190C480,190,240,190,120,190L0,190Z"
            ></path>
          </svg>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          opacity: 0.3,
          height: "100%",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="./backabout1.svg"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="./backabout2.svg"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="./backabout3.svg"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default AboutUs;
