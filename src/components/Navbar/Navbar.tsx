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
        Home
      </p>
      <p
        className={actualTab === "PROJECTS" ? `Navbar--active` : ""}
        onClick={() => setActualTab("PROJECTS")}
      >
        Projects
      </p>
      <p
        className={actualTab === "CONTACT" ? `Navbar--active` : ""}
        onClick={() => setActualTab("CONTACT")}
      >
        Contact
      </p>
    </Styles>
  );
};

Navbar.defaultProps = {};

export default Navbar;
