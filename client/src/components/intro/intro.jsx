/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import "./intro.css";
import NetflixLogo from "./logo";
import { delay, motion } from "framer-motion";
import { use } from "react";

const ArcProgress = ({
  percentage = 50,
  size = 200,
  strokeWidth = 2,
  color = "red",
  x = 0,
  y = 0,
  rotate = 0,
  speed = 1,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return (
    <motion.svg
      // style={{ transform: `rotate(${rotate}deg)` }}
      initial={{ transform: `rotate(${rotate}deg)` }}
      animate={{ transform: `rotate(${rotate + 360}deg)` }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        delay: 0.5 / speed,
      }}
      className="SemiCircle"
      width={size}
      height={size}
      viewBox={`${x} ${y} ${size} ${size}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </motion.svg>
  );
};

const NetflixDeepZoom = ({ startIntro }) => {
  const [visible, setVisible] = React.useState(false);
  const [Size, setSize] = useState(600);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 8300); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (startIntro) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [startIntro]);

  useEffect(() => {
    const widthofWindow = window.innerWidth;
    widthofWindow >= 700 && setSize(500);
    widthofWindow < 700 && widthofWindow > 400 && setSize(400);
    widthofWindow <= 400 && setSize(300);
    console.log(Size + "===" + widthofWindow);
  }, [Size]);
  if (visible)
    return (
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 150 }}
        transition={{
          delay: 4.5,
          duration: 3,
          ease: "easeInOut",
          opacity: {
            duration: 1.5,
            ease: "easeInOut",
            delay: 6,
          },
        }}
        className={`deep-zoom-container`}
      >
        {ArcProgress({
          percentage: 35,
          speed: 1.1,
          rotate: 95,
          size: Size - 200,
          strokeWidth: 2,
          color: "#998055",
          x: 0,
          y: 0,
        })}
        {ArcProgress({
          percentage: 30,
          rotate: 34,
          speed: 1.2,
          size: Size - 100,
          strokeWidth: 2,
          color: "#998055",
          x: 0,
          y: 0,
        })}
        {ArcProgress({
          percentage: 40,
          rotate: 10,
          size: Size,
          speed: 1,
          strokeWidth: 2,
          color: "#998055",
          x: 0,
          y: 0,
        })}
        <img
          style={{
            // width: "100%",
            // height: "100%",
            maxWidth: `${Size - 250}px`,
            maxHeight: `${Size - 250}px`,
            color: "#998055",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "contain",
            zIndex: 1,
          }}
          src="./Zero-To-logo-wos.svg"
          alt=""
        />
      </motion.div>
    );
};

export default NetflixDeepZoom;
