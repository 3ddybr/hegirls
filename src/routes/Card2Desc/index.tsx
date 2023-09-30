import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card2 from "../../components/Card2";

export default function Card2Desc() {
  return (
    <>
      <div id="containerCardDesc">
        <div id="contentCardDesc">
          <div id="containerSwiper">
            <Card2 />
          </div>
          <div>
            <p>
              Este brechó oferece roupas mais vintages, com uma estética antiga,
              isso não faz deixar de serem roupas lindas, o brechó se localiza
              dentro de uma residência onde você pode entrar e se esbaldar com
              as novidades. LOCALIZAÇÃO: centro, em frente a matriz( catedral )
              CONTATO: 28 99922-1531
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
