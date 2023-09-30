import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import Card4 from "../Card4";

export default function Carrousel() {
  return (
    <>
      <div id="containerCardCarrousel">
        <div id="contentCardCarrousel "></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            440: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
          }}
        >
          <SwiperSlide>
            <Card1 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card3 />
          </SwiperSlide>
          <SwiperSlide>
            <Card4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
