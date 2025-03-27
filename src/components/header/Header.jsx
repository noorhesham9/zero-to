/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import "./header.css";
import { useEffect } from "react";
function Header({ sectionNames }) {
  const [isOpen, setIsOpen] = useState(false);

  const [num] = useState(60);
  const [vw] = useState(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );
  const [vh] = useState(
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  );

  useEffect(() => {
    const stars = document.querySelectorAll("#sky .star");
    const shootingStars = document.querySelectorAll("#shootingstars .wish");

    const animateStars = () => {
      stars.forEach((star, i) => {
        setTimeout(() => {
          star.style.opacity = "0";
          setTimeout(() => {
            star.style.opacity = "1";
          }, 700);
        }, 50 * i);
      });
    };

    const animateShootingStars = () => {
      shootingStars.forEach((star, i) => {
        setTimeout(() => {
          star.style.opacity = "1";
          star.style.width = "150px";
          setTimeout(() => {
            star.style.width = "0px";
          }, 700);
        }, 1000 * i);
      });
    };

    const interval1 = setInterval(animateStars, 1400);
    const interval2 = setInterval(animateShootingStars, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const randomRadius = () => Math.random() * 0.7 + 0.6;
  const getRandomX = () => Math.floor(Math.random() * vw).toString();
  const getRandomY = () => Math.floor(Math.random() * vh).toString();
  const getRandomColor = () => {
    const colors = ["white", "blue", "yellow", "orange", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const variants = {
    closed: {
      width: "0px",
      opacity: 0,
      transition: { delay: 0.8, duration: 0.5, ease: "easeInOut" },
    },
    open: {
      width: "300px",
      opacity: 1,
      transition: { delay: 0.35, duration: 0.5, ease: "easeInOut" },
    },
  };
  const variants2 = {
    closed: {
      width: "0px",
      opacity: 0,
      transition: { delay: 1.15, duration: 0.5, ease: "easeInOut" },
    },
    open: {
      width: "100%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const variants3 = {
    closed: {
      y: 50,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      style={{
        padding: "0",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "200px",
            height: "100%",
            cursor: "pointer",
            display: "flex",
            padding: "0px 10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              "&:after": {
                content: "''",
                position: "absolute",
                top: "50%",
                right: "0%",
                transform: "translateY( -50%)",
                width: "2px",
                height: "70%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "5px",
              },
              position: "relative",
              // width: "150px",
              maxHeight: "70px",

              cursor: "pointer",
              display: "flex",
              padding: "0px 10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                maxHeight: "70px",
              }}
              src="./Zero-To2.svg"
              alt=""
            />
          </Box>
          <Box
            sx={{
              marginLeft: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "calc(100% - 150px)",
              height: "100%",
              "& a": {
                color: "#fff",
                textDecoration: "none",
              },
              "& a:hover": {
                color: "#fb613d",
              },
            }}
          >
            <a
              style={{
                transition: " 0.3s ease-in-out",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              href="#Home"
            >
              <HomeRoundedIcon
                sx={{
                  width: {
                    xs: "20px",
                    sm: "28px",
                  },
                  height: {
                    xs: "20px",
                    sm: "28px",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "28px",
                  },
                  fontFamily: "var(--font-headding )",
                }}
              >
                Home
              </Typography>
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 3,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "open" : ""}
            id="nav-icon2"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <motion.div
            style={{
              borderTop: "1px solid #fb613d",
              borderLeft: "1px solid #fb613d",
              borderBottom: "1px solid #fb613d",
              position: "absolute",
              top: "0",
              right: "0px",
              background: "#333",
              borderRadius: "10px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              zIndex: 2,

              width: "300px",
              height: "calc(100vh - 20px )",
              margin: "10px auto",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "10px",
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            <div
              style={{
                padding: "0 3.5rem 0 20px",
                fontFamily: "var(--fontNav-headding) !important",
              }}
            >
              {sectionNames &&
                sectionNames.map((section, index) => (
                  <motion.a
                    animate={isOpen ? "open" : "closed"}
                    transition={{
                      delay: isOpen ? 0.7 + 0.1 * index : 0.1 * index,
                      duration: 0.2,
                      stiffness: 5,
                    }}
                    variants={variants3}
                    href="#"
                    className="HeadernavLink"
                    key={index}
                  >
                    {section}
                  </motion.a>
                ))}
            </div>
          </motion.div>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants2}
            style={{
              position: "absolute",
              top: "0",
              left: "0px",
              background: "#03032e8d",
              zIndex: 1,
              width: "100%",
              height: "100vh",
            }}
          >
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              id="sky"
            >
              {[...Array(num)].map((_, index) => (
                <circle
                  cx={getRandomX()}
                  cy={getRandomY()}
                  r={randomRadius()}
                  stroke="none"
                  strokeWidth="0"
                  fill={getRandomColor()}
                  key={index}
                  className="star"
                  style={{ transition: "opacity 0.7s linear" }}
                />
              ))}
            </svg>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
