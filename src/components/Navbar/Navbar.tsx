import React from "react";

import Styles from "./Navbar.styles";
import { NavbarProps as Props } from "./Navbar.types";

const Navbar: React.FC<Props> = (props) => {
  return (
    <Styles className="Navbar">
      <p>Inicio</p>
      <p>Bitácora</p>
      <p>Contacto</p>
    </Styles>
  );
};

Navbar.defaultProps = {};

export default Navbar;
