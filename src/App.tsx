import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "./components/Card";
import Header from "./components/Header";

import "./styles/app.scss";

function App() {
  return (
    <>
      <div id="containerApp">
        <Header />
        <h1>Encontre um Brechó e economize no seu look</h1>
        <main id="mainApp">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // spaceBetween={50}
            slidesPerView={2.5}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
    </>
  );
}

export default App;
