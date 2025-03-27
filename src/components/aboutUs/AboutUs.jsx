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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#060d21"
              fillOpacity="1"
              d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,192C840,213,960,235,1080,213.3C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
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
