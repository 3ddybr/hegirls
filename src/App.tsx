import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Header from "./components/Header";

import "./styles/app.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="containerApp">
        <Header />
        <h1>Seu look na palma da mão</h1>
        <main id="mainApp">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
