import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../assets/brecho1/img1.jpeg";
import img2 from "../../assets/brecho1/img2.jpeg";
import img3 from "../../assets/brecho1/img3.jpeg";
import img4 from "../../assets/brecho1/img4.jpeg";
import { Link } from "react-router-dom";

export default function Card1() {
  return (
    <>
      <div id="containerCard">
        <div id="contentCard">
          <Link to="/brecho1">
            <h1>Brechó Bairro Amarelo</h1>
          </Link>
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
          </Swiper>
        </div>
      </div>
    </>
  );
}
