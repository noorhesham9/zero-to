import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Mousewheel, Pagination } from "swiper/modules";
import "./index.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import { useEffect, useState } from "react";
import OurPhilosophy from "./components/OurPhilosophy/OurPhilosophy";
import LatestProjects from "./components/LatestProjects/LatestProjects";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visitedSlides, setVisitedSlides] = useState(new Set()); // Store visited slides

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);
  const sectionNames = [
    "HOME",
    "ABOUT US",
    "PHILOSOPHY",
    "LATEST PROJECTS",
    "SERVICES",
    "LET'S TALK",
    "CONTACT",
  ];

  const sectionNames2 = [
    "Home",
    "About Us",
    "Philosophy",
    "Latest Projects",
    "Services",
    "Let's Talk",
    "Contact",
  ];

  return (
    <div
      style={{
        // position: "relative",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Header sectionNames={sectionNames2} />
      <Swiper
        className="main-swiper"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setVisitedSlides((prev) => new Set(prev).add(swiper.activeIndex));
        }}
        style={{
          height: "calc(100% - 70px)",
          width: "100%",
          overflow: "hidden",
          margin: "70px 0 0 0",
        }}
        direction={"vertical"}
        slidesPerView={1}
        speed={1100}
        mousewheel={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class="${className} main-swiperbullets">
          <div class="dot">
          </div>
          <span class="text">${sectionNames[index]}</span>
          </div>`;
          },
        }}
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUs visitedSlides={visitedSlides} activeIndex={activeIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <OurPhilosophy
            visitedSlides={visitedSlides}
            activeIndex={activeIndex}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProjects
            visitedSlides={visitedSlides}
            activeIndex={activeIndex}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
}

export default App;
