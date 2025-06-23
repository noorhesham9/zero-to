import React, { useRef, useEffect } from "react";
import BubblesScreenSaver from "./BubblesScreenSaver";
function Home() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   const video = videoRef.current;

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   if (canvas.width >= 600) {
  //     const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  //     gradient.addColorStop(0, "#1e1e1e");
  //     gradient.addColorStop(0.5, "#3a3a3a");
  //     gradient.addColorStop(1, "#505050");

  //     ctx.fillStyle = gradient;
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   } else {
  //     const gradient = ctx.createRadialGradient(
  //       canvas.width / 2,
  //       canvas.height / 2,
  //       0,
  //       canvas.width / 2,
  //       canvas.height / 2,
  //       canvas.width / 2
  //     );

  //     gradient.addColorStop(0, "rgba(0,0,0,0.10)"); // المركز
  //     gradient.addColorStop(0.5, "rgba(0,0,0,0.30)"); // المنتصف
  //     gradient.addColorStop(1, "rgba(0,0,0,0.4)"); // الحواف

  //     ctx.fillStyle = gradient;
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   }

  //   const handleMouseMove = (event) => {
  //     const { clientX, clientY } = event;

  //     // Set composite mode to erase
  //     ctx.globalCompositeOperation = "destination-out";

  //     // Draw a circle to reveal video
  //     ctx.beginPath();
  //     ctx.arc(clientX, clientY, 80, 0, Math.PI * 10);
  //     ctx.fill();

  //     // Reset composite operation
  //     ctx.globalCompositeOperation = "source-over";
  //   };
  //   handleMouseMove({ clientX: canvas.width / 2, clientY: canvas.height / 2 });

  //   canvas.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     canvas.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div
      id="home"
      className="section__home"
      style={{
        position: "relative",
        zIndex: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src="./home_video.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
        className="section__home-video"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <BubblesScreenSaver />

      {/* <FloatingCircles /> */}

      {/* Canvas for Masking Effect */}
      <canvas
        ref={canvasRef}
        style={{
          cursor: "crosshair",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="section__bg-wrapper">
        <span className="bg__title">THIS IS OUR WORLD</span>
      </div>
    </div>
  );
}

export default Home;
