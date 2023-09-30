import "./styled.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card3 from "../../components/Card3";

export default function Card3Desc() {
  return (
    <>
      <div id="containerCardDesc">
        <div id="contentCardDesc">
          <div id="containerSwiper">
            <Card3 />
          </div>
          <div>
            <p>
              Este brechó contém roupas infantis, são diversas opções, o brechó
              varia entre roupas infantis, brinquedos, carrinhos de bebê,etc. É
              um brechó grande com muitas opções, para as pessoas que procuram
              roupas infantis ou brinquedos aqui é a melhor opção, valores
              acessíveis e ótima qualidade. LOCALIZAÇÃO: centro
              CONTATO:(28)999633456
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
