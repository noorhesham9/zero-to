/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
function OurPhilosophy({ activeIndex, visitedSlides }) {
  const sentence = "Our Customers Are Our Partners"; // Your text
  const words = sentence.split(" ");

  return (
    <Box
      sx={{
        backgroundImage: "url('./backgroundPhio.svg')",
        height: "100%",
        width: "100%",
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
                  visitedSlides.has(2)
                    ? { width: "50px" } // No animation if already visited
                    : activeIndex === 2
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(2)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 2
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Our Philosophy
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
                      visitedSlides.has(2)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 2
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
                  visitedSlides.has(2)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 2
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 2.5 }}
                viewport={{ once: true }}
              >
                At Zero To Agency, our vision is to strengthen businesses to
                achieve their full potential through cutting-edge solutions. We
                aim to ignite their aspirations and guide them on their journey
                to new heights of success.
                <br />
                Our mission is to empower our clients with cutting-edge
                technology, strategic insights and a relentless commitment to
                quality. We believe in crafting digital experiences that not
                only deliver results but also inspire growth and unleash the
                full potential of our clients. With a keen eye for detail and a
                passion for excellence, we strive to be the catalyst for change
                and the driving force behind our clients' digital
                transformations.
              </motion.p>
            </Box>
          </Box>
        </AnimatePresence>
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

export default OurPhilosophy;
