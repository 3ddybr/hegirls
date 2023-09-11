import logo from "../../assets/logo.jpeg";

import "./styled.scss";

export default function Header() {
  return (
    <>
      <div id="containerHeader">
        <div id="contentHeader">
          <img id="logoImgHeader" src={logo} alt="Logo Brechós he-girls" />
        </div>
      </div>
    </>
  );
}
