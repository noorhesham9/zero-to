import React, { useRef, useEffect } from "react";
function Home() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#1e1e1e");
    gradient.addColorStop(0.5, "#3a3a3a");
    gradient.addColorStop(1, "#505050");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Set composite mode to erase
      ctx.globalCompositeOperation = "destination-out";

      // Draw a circle to reveal video
      ctx.beginPath();
      ctx.arc(clientX, clientY, 50, 0, Math.PI * 2);
      ctx.fill();

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

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
