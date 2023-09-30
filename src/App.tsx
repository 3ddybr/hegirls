import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Header from "./components/Header";

import "./styles/app.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div id="containerApp">
        <Header />
        <h1>Encontre um Brechó e economize no seu look</h1>
        <main id="mainApp">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
