// BubblesScreenSaver.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./BubblesScreenSaver.css";
import { use } from "react";

const getRandom = (min, max) => Math.random() * (max - min) + min;
const particleColors = ["red", "orange", "yellow", "white"];

const createParticle = (x, y) => ({
  id: crypto.randomUUID(),
  x,
  y,
  targetX: getRandom(0, window.innerWidth),
  targetY: getRandom(0, window.innerHeight),
  color: particleColors[Math.floor(Math.random() * particleColors.length)],
});

const BubblesScreenSaver = () => {
  const [bubbles, setBubbles] = useState([]);
  const [particles, setParticles] = useState([]);
  const NUM_PARTICLES = 70;
  const [Size, setSize] = useState(150);

  const getsize = () => {
    const widthofWindow = window.innerWidth;
    if (widthofWindow >= 1000) return 150;
    if (widthofWindow < 1000 && widthofWindow > 700) return 120;
    if (widthofWindow < 700 && widthofWindow > 400) return 100;
    return 80;
  };

  const createBubble = (letter, isLogo = false) => ({
    id: Math.random().toString(36).substr(2, 9),
    x: getRandom(0, 200),
    y: getRandom(0, 200),
    size: getsize(),
    dx: getRandom(-1, 1),
    dy: getRandom(-1, 1),
    letter,
    isLogo,
    frozen: false,
    shrinking: false,
  });

  const handleClick = (id) => {
    setBubbles((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, frozen: true, shrinking: true } : b
      )
    );
  };

  useEffect(() => {
    const letters = ["Z", "E", "R", "O", "T"];
    const logoBubble = createBubble("/Zero-To-logo.svg", true); // path to your logo image
    const initial = [...letters.map((char) => createBubble(char)), logoBubble];
    setBubbles(initial);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev.flatMap((b) => {
          if (b.frozen && b.shrinking) {
            const newSize = b.size - 2;
            if (newSize <= 0) {
              spawnParticles(b.x, b.y);
              return []; // remove this bubble
            }
            return [{ ...b, size: newSize }];
          }

          if (!b.frozen) {
            let newX = b.x + b.dx * 2;
            let newY = b.y + b.dy * 2;

            if (newX < 0 || newX > window.innerWidth - b.size) b.dx *= -1;
            if (newY < 0 || newY > window.innerHeight - b.size) b.dy *= -1;

            return [{ ...b, x: newX, y: newY }];
          }

          return [b];
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const spawnParticles = (x, y) => {
    const newParticles = Array.from({ length: NUM_PARTICLES }, () =>
      createParticle(x, y)
    );
    setParticles((prev) => [...prev, ...newParticles]);

    // Remove after animation (e.g. 2s)
    setTimeout(() => {
      setParticles((prev) => prev.slice(NUM_PARTICLES));
    }, 5500);
  };

  return (
    <div className="bubbles-container">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            onClick={() => {
              handleClick(bubble.id);
            }}
            key={bubble.id}
            className="bubble"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: bubble.x,
              y: bubble.y,
            }}
            transition={{ duration: 0.5, ease: "linear" }}
            style={{
              position: "absolute",
              width: bubble.size,
              height: bubble.size,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Roboto, sans-serif",
              zIndex: 6,
              fontWeight: "700",
            }}
          >
            {bubble.isLogo ? (
              <img
                src={bubble.letter}
                alt="logo"
                style={{ width: "60%", height: "60%", objectFit: "contain" }}
              />
            ) : (
              <span
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: bubble.size * 0.5,
                  fontWeight: "bold",
                }}
              >
                {bubble.letter}
              </span>
            )}
          </motion.div>
        ))}

        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="star"
            initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
            animate={{
              x: p.targetX,
              y: p.targetY,
              scale: 0.5,
              opacity: 0,
            }}
            transition={{
              opacity: { duration: 6, ease: "easeIn" },

              duration: 2,
              ease: "easeOut",
            }}
            style={{
              backgroundColor: p.color,
              width: 5,
              height: 5,
              borderRadius: "50%",
              position: "absolute",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BubblesScreenSaver;
