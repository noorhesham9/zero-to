/* eslint-disable react/prop-types */
import { Box, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

function Services({ activeIndex, visitedSlides }) {
  const sentence = "Our Services"; // Your text
  const words = sentence.split(" ");
  const Services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We develop high-quality, responsive websites for businesses of all sizes.",
      icon: "./servIocnWeb.svg",
    },
    {
      id: 2,
      title: "Branding",
      description:
        "Similar to lightning in the sky that catches everyone's attention, our branding service will make your brand stand out in the market.",
      icon: "./servIocnBrand.svg",
    },
    {
      id: 3,
      title: "Social Media",
      description:
        " We're here to assist you in connecting with your target audience and utilizing our proven content strategy, planning, media buying services",
      icon: "./servIocnSocial.svg",
    },
    {
      id: 4,
      title: "Creative",
      description:
        "We create seamless, user-friendly e-commerce platforms that cater to your business's needs and goals.",
      icon: "./servIocnCreative.svg",
    },
    {
      id: 5,
      title: "Media",
      description:
        "Our mobile app development services will help you create engaging, intuitive, and user-friendly mobile apps for your business.",
      icon: "./servIocnMedia.svg",
    },
    {
      id: 6,
      title: "Marketing",
      description:
        "Our analytics and reporting services will help you understand your business's performance and make data-driven decisions.",
      icon: "./servIocnMarket.svg",
    },
  ];
  return (
    <Box
      className="ServicesBox"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundImage: "url(./backGroundServices.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#333",
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "0.2rem",
        textTransform: "uppercase",
        // cursor: "pointer",
      }}
    >
      <Container
        sx={{
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
              width: {
                xs: "calc(100% - 15px)",
                sm: "calc(100% - 135px)",
              },
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
                  visitedSlides.has(4)
                    ? { width: "50px" } // No animation if already visited
                    : activeIndex === 4
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(4)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 4
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Services
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
                      visitedSlides.has(4)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 4
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
              marginLeft: {
                xs: "15px",
                sm: "135px",
              },
              marginTop: "15px",
              display: "flex",
              width: {
                xs: "calc(100% - 15px)",
                sm: "calc(100% - 135px)",
              },
              gap: "20px",
              flexWrap: "Wrap",
              "@media (max-width:550px)": {
                marginBottom: "12px",
              },
            }}
          >
            {Services.map((service) => (
              <Box
                component={motion.div}
                key={service.id}
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(4)
                    ? { opacity: 1 }
                    : activeIndex === 4
                    ? { opacity: 1 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 1.4 + 0.2 * (2 + service.id),
                }}
                viewport={{ once: true }}
                sx={{
                  border: "1px solid #926916",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  maxWidth: "300px",
                  width: "calc(31% - 22px)",
                  padding: "10px",
                  borderRadius: "4px",
                  boxShadow: "rgb(0 0 0 / 10%) 0px 0px 10px 2px",
                  cursor: "pointer",
                  background: "rgb(0 0 0 / 3%)",
                  "@media (max-width:760px)": {
                    width: "calc(47% - 22px)",
                  },
                  "@media (max-width:550px)": {
                    maxWidth: "100%",
                    width: "calc(100% - 22px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="iconService"
                    src={service.icon}
                    alt={service.title}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{
                      color: "#926916",
                      opacity: 0.8,
                      padding: "10px",
                      fontSize: "20px",
                      fontFamily: "var(--fontNav-headding)",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      cursor: "pointer",

                      "@media (min-width:1200px)": {
                        fontSize: "25px",
                      },

                      "@media (max-width:1002px)": {
                        fontSize: "20px",
                      },
                      "@media (max-width:700px) and (min-width:600px)": {
                        fontSize: "20px",
                      },
                      "@media (max-width:550px)": {
                        fontSize: "16px",
                        padding: "5px",
                      },
                    }}
                  >
                    {service.title}
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "#926916",
                    opacity: 0.7,
                    fontSize: "10px",
                    fontFamily: "Funnel Sans, sans-serif",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    textDecoration: "none",
                    "@media (min-width:1200px)": {
                      fontSize: "16px",
                    },
                    "@media (min-width:1002px)": {
                      fontSize: "14px",
                    },
                    "@media (max-width:700px) and (min-width:600px)": {
                      display: "none",
                    },
                    "@media (max-width:550px)": {
                      display: "none",
                    },
                  }}
                >
                  {service.description}
                </Box>
              </Box>
            ))}
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default Services;
