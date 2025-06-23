/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "./pricing.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Pricing({ activeIndex, visitedSlides }) {
  const sentence = "Pricing Table";
  const words = sentence.split(" ");

  // Array of pricing packages
  const packages = [
    {
      className: "MoonPackage",
      header: "Moon",
      desc: "Perfect for small businesses or startups just beginning their online presence.",
      img: "./MoonPricing.png",
      details: [
        "1 Social Media Platform",
        "8 Posts per Month",
        "Basic Ad Setup",
        "Monthly Performance Report",

        "Monthly Performance Report",
      ],
      price: "5000EGP",
    },
    {
      className: "MarsPackage",
      header: "Mars",
      desc: "Ideal for businesses aiming to increase reach and engagement.",
      img: "./marsPricing.png",
      details: [
        "1 Social Media Platform",
        "8 Posts per Month",
        "facebook stories",
        "Basic Ad Setup",
        "Monthly Performance Report",
        "Monthly Performance Report",
        "Monthly Performance Report",
      ],
      price: "10000EGP",
    },
    {
      className: "jupiterPackage",
      header: "Jupiter",
      desc: "Tailored for larger businesses with specific goals and website needs.",
      img: "./jubiterpricing.png",
      details: [
        "Content Plan",
        "Pro le picture",
        "facebook stories",
        "1 Social Media manage",
        "8 posts per month",
        "2 ads facebook",
        "monthly Basic report",
      ],
      price: "30000EGP",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url('./PricingbackG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#000",
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
                xs: "15px",
                sm: "135px",
              },
            }}
          >
            <div className="aboutUsTitle">
              <motion.span
                initial={{ width: 0 }}
                animate={
                  visitedSlides.has(5)
                    ? { width: "50px" }
                    : activeIndex === 5
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(5)
                    ? { opacity: 1 }
                    : activeIndex === 5
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Pricing
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
                      visitedSlides.has(5)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 5
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
            className="contentPricingWrapper"
            initial={{ opacity: 0 }}
            animate={
              visitedSlides.has(5)
                ? { opacity: 1 } // No animation if already visited
                : activeIndex === 5
                ? { opacity: 1 }
                : {}
            }
            transition={{ duration: 0.5, delay: 2.5 }}
            viewport={{ once: true }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              flexWrap: "wrap",
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
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                850: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1150: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              style={{}}
            >
              {packages.map((pkg, idx) => (
                <SwiperSlide key={pkg.header}>
                  <div className={pkg.className}>
                    <header>{pkg.header}</header>
                    <Box className="descPricing">{pkg.desc}</Box>
                    <img src={pkg.img} className="imagePricing" alt="" />
                    <Box className="Details">
                      {pkg.details.map((detail, i) => (
                        <div key={i}>
                          <span></span>
                          {detail}
                        </div>
                      ))}
                    </Box>
                    <Box className="pricePricing">
                      <button>Launch</button>
                      <Typography className="priceText">
                        <span>starting from </span>
                        {pkg.price}
                      </Typography>
                    </Box>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default Pricing;
