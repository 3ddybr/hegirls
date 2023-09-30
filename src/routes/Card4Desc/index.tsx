import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card4 from "../../components/Card4";

export default function Card4Desc() {
  return (
    <>
      <div id="containerCardDesc">
        <div id="contentCardDesc">
          <div id="containerSwiper">
            <Card4 />
          </div>
          <div>
            <p>
              Este brechó apresenta roupas de moda atual, bem jovial e estiloso.
              contém sapatos além de roupas, o local é simplesmente maravilhoso,
              super aconchegante e lindo, sem falar nos descontos que vimos ali
              , no local tem uma cafeteria perfeita para você que quer comprar
              umas roupas e tomar um café. LOCALIZAÇÃO: bairro independência,
              próximo ao restaurante doki sushi CONTATO: instagram:
              @brechodasemiruiva
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
