import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Mousewheel, Pagination } from "swiper/modules";
import "./index.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const sectionNames = [
    "HOME",
    "WE HELP",
    "PHILOSOPHY",
    "LATEST PROJECTS",
    "DEPARTMENTS",
    "CLIENTS",
    "SERVICES",
    "LET'S TALK",
    "OUR TEAM",
    "CONTACT",
  ];

  const sectionNames2 = [
    "Home",
    "We Help",
    "Philosophy",
    "Latest Projects",
    "Departments",
    "Clients",
    "Services",
    "Let's Talk",
    "Our Team",
    "Contact",
  ];

  return (
    <>
      <Header sectionNames={sectionNames2} />
      <Swiper
        style={{
          height: "calc(100vh - 100px)",
          width: "100%",
          overflow: "hidden",
          margin: "100px 0 0 0",
          marginTop: "100px",
        }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        speed={1100}
        mousewheel={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class="${className}">
          <div class="dot">
          </div>
          <span class="text">${sectionNames[index]}</span>
      </div>`;
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Footer />
    </>
  );
}

export default App;
