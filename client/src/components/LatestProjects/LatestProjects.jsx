/* eslint-disable react/prop-types */
import { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./latestProjects.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Button, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css/autoplay";

function LatestProjects({ activeIndex, visitedSlides }) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const sentence = "Latest Project"; // Your text
  const words = sentence.split(" ");

  const Projects = [
    {
      name: "Magic eyes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a unde dignissimos suscipit dicta esse maiores nihil vero dolorum porro, quo, cupiditate eius fuga ea modi, reprehenderit ducimus explicabo exercitationem odio! Sequi.",
      image: "./project1.webp",
    },
    {
      name: "Project 2",
      description:
        "Vestibulum quis enim vel nisi tincidunt faucibus. Sed euismod, nunc eget tristique placerat, justo mauris dapibus velit, at interdum ipsum diam ac enim.",
      image: "./project2.jpg",
    },
    {
      name: "Project 3",
      description:
        "Morbi consectetur lacus et ipsum commodo, ut tincidunt neque molestie. Sed euismod, nunc eget tristique placerat, justo mauris dapibus velit, at interdum ipsum diam ac enim.",
      image: "./project3.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#00000075",
        backgroundImage: "url(./latestProjects.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "Top Center",
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
                xs: "15px",
                sm: "135px",
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
            component={motion.div}
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
            transition={{ duration: 0.7, delay: 1.4 + 0.2 * 2 }}
            sx={{
              "@media (max-width: 776px)": {
                flexDirection: "column",
              },
              marginBottom: "40px",
              display: "flex",
              marginTop: "15px",
              gap: "15px",
              position: "relative",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 10,
              marginLeft: {
                xs: "15px",
                sm: "135px",
              },
            }}
          >
            {/* First Swiper */}
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="swiper-projects"
              modules={[Controller, Pagination, Autoplay]}
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
              speed={1000}
            >
              {Projects.map((project, index) => (
                <SwiperSlide key={index} style={{}}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",

                      aspectRatio: "1",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        aspectRatio: "1",
                        width: "calc(100% )",
                        objectFit: "contain",
                      }}
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Second Swiper */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "space-between",
                overflow: "hidden",
                maxWidth: "500px",
                alignItems: "flex-start",
                color: "white",
                fontSize: "13px",
              }}
            >
              <Swiper
                style={{
                  width: "100%",
                  flexGrow: "1",
                  height: "fit-content",
                  margin: 0,
                  color: "white",
                  textAlign: "left",
                  fontSize: "13px",
                }}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                slidesPerView={1}
                loop={true}
              >
                {Projects.map((project, index) => (
                  <SwiperSlide
                    style={{
                      marginTop: "5px",
                      textAlign: "left",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                    className="SLideDescription"
                    key={index}
                  >
                    {project.description}
                  </SwiperSlide>
                ))}
              </Swiper>
              <Button
                sx={{
                  variant: "contained",
                  backgroundColor: "#aaaaaa6c",
                  border: "1px solid #fb613d",
                  fontFamily: "var(--font-headding)",
                  color: "#fb613d",
                  fontSize: "15px",
                  fontWeight: "bold",
                  transition: "0.3s ease-in-out",
                  padding: "5px 10px",
                  "&:hover": {
                    color: "white",
                  },
                  "&:disabled": {
                    backgroundColor: "gray",
                    color: "white",
                    cursor: "not-allowed",
                  },
                }}
              >
                Rest Of Projects
              </Button>
            </div>
          </Box>
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default LatestProjects;
