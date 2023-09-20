import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../assets/brecho3/img1.jpeg";
import img2 from "../../assets/brecho3/img2.jpeg";
import img3 from "../../assets/brecho3/img3.jpeg";
import img4 from "../../assets/brecho3/img4.jpeg";
import img5 from "../../assets/brecho3/img5.jpeg";
import img6 from "../../assets/brecho3/img6.jpeg";
import img7 from "../../assets/brecho3/img7.jpeg";

export default function Card3() {
  return (
    <>
      <div id="containerCard">
        <div id="contentCard">
          <h1>Brechó Baby Kids</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img className="imgCard" src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgCard" src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgCard" src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgCard" src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgCard" src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgCard" src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgCard" src={img7} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
