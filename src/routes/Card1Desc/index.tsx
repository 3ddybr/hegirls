import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card1 from "../../components/Card1";

export default function Card1Desc() {
  return (
    <>
      <div id="containerCardDesc">
        <div id="contentCardDesc">
          <div id="containerSwiper">
            <Card1 />
          </div>
          <div>
            <p>
              Este brechó oferece roupas de ótimo preço e qualidade, ao
              inspecionar esse local observamos que à uma grande variedade de
              roupas de festa contendo vestidos de ótimo gosto, o local não
              oferece apenas roupas, também à sapatos, cd’s, formas de
              alimentos, bolsas, entre outros. LOCALIZAÇÃO: Bairro amarelo, ao
              lado da loja “parafusos e ferramentas”, número 206 CONTATO: (28)
              999780405
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
