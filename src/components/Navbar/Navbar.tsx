import React from "react";

import Styles from "./Navbar.styles";
import { NavbarProps as Props } from "./Navbar.types";

const Navbar: React.FC<Props> = (props) => {
  const { actualTab, setActualTab } = props;

  return (
    <Styles className="Navbar" actualTab={actualTab}>
      <p
        className={actualTab === "HOME" ? `Navbar--active` : ""}
        onClick={() => setActualTab("HOME")}
      >
        Inicio
      </p>
      <p
        className={actualTab === "BINNACLE" ? `Navbar--active` : ""}
        onClick={() => setActualTab("BINNACLE")}
      >
        Bitácora
      </p>
      <p
        className={actualTab === "CONTACT" ? `Navbar--active` : ""}
        onClick={() => setActualTab("CONTACT")}
      >
        Contacto
      </p>
    </Styles>
  );
};

Navbar.defaultProps = {};

export default Navbar;
