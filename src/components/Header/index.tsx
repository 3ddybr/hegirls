import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

import "./styled.scss";

export default function Header() {
  return (
    <>
      <div id="containerHeader">
        <div id="contentHeader">
          <Link to="/">
            <img id="logoImgHeader" src={logo} alt="Logo Brechós he-girls" />
          </Link>
        </div>
      </div>
    </>
  );
}
