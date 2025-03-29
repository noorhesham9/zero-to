/* eslint-disable react/prop-types */
import { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./latestProjects.css";
import { Pagination } from "swiper/modules";
import { Box, Button, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
function LatestProjects({ activeIndex, visitedSlides }) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const sentence = "Latest Project"; // Your text
  const words = sentence.split(" ");

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Container
        sx={{
          color: "white",
          textAlign: "left",
          marginLeft: "10px !important",
        }}
      >
        <AnimatePresence key={"1"}>
          <Box
            sx={{
              position: "relative",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 10,
              marginLeft: {
                xs: "20px",
                sm: "145px",
              },
            }}
          >
            <div className="aboutUsTitle">
              <motion.span
                initial={{ width: 0 }}
                animate={
                  visitedSlides.has(3)
                    ? { width: "50px" } // No animation if already visited
                    : activeIndex === 3
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(3)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 3
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Projects
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
                    key={index}
                    initial={{
                      opacity: 0,
                    }}
                    viewport={{ once: true }}
                    animate={
                      visitedSlides.has(3)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 3
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
          </Box>
          <Box
            sx={{
              "@media (max-width: 776px)": {
                flexDirection: "column",
              },
              display: "flex",
              marginTop: "15px",
              gap: "15px",
              position: "relative",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 10,
              marginLeft: {
                xs: "20px",
                sm: "145px",
              },
            }}
          >
            {/* First Swiper */}
            <Swiper
              className="swiper-projects"
              modules={[Controller, Pagination]}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<div class="${className} projects-swiperbullets">
          <div class="dot">
          </div>
          </div>`;
                },
              }}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              slidesPerView={1}
              loop={true}
            >
              <SwiperSlide
                style={{
                  backgroundColor: "#f8312f",
                }}
              >
                Slide 1 - First Swiper
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "#05038b",
                }}
              >
                Slide 2 - First Swiper
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "#f82fb5",
                }}
              >
                Slide 3 - First Swiper
              </SwiperSlide>
            </Swiper>

            {/* Second Swiper */}
            <Swiper
              style={{
                maxWidth: "400px",
                margin: 0,
                color: "white",
                textAlign: "left",
                fontSize: "12px",
              }}
              modules={[Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              slidesPerView={1}
              loop={true}
            >
              <SwiperSlide
                style={{
                  textAlign: "left",
                  backgroundColor: "transparent",

                  fontSize: "12px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a
                unde dignissimos suscipit dicta esse maiores nihil vero dolorum
                porro, quo, cupiditate eius fuga ea modi, reprehenderit ducimus
                explicabo exercitationem odio! Sequi.
              </SwiperSlide>
              <SwiperSlide
                style={{
                  textAlign: "left",
                  backgroundColor: "transparent",
                  fontSize: "12px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a
                unde dignissimos suscipit dicta esse maiores nihil vero dolorum
                porro, quo, cupiditate eius fuga ea modi, reprehenderit ducimus
                explicabo exercitationem odio! Sequi.
              </SwiperSlide>
              <SwiperSlide
                style={{
                  textAlign: "left",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a
                unde dignissimos suscipit dicta esse maiores nihil vero dolorum
                porro, quo, cupiditate eius fuga ea modi, reprehenderit ducimus
                explicabo exercitationem odio! Sequi.
                <Button sx={{}} variant="contained">
                  sdligfh
                </Button>
              </SwiperSlide>
            </Swiper>
          </Box>
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default LatestProjects;
