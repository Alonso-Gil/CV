import React from "react";
import { motion } from "framer-motion";

import Styles from "./Navbar.styles";
import { NavbarProps as Props } from "./Navbar.types";

import HomeSVG from "assets/images/home.svg";
import FolderSVG from "assets/images/folder.svg";
import UserSVG from "assets/images/user.svg";

const Navbar: React.FC<Props> = (props) => {
  const { actualTab, setActualTab } = props;
  console.log(actualTab);

  return (
    <Styles className="Navbar">
      <div className="Navbar__container">
        <ul className="Navbar__list">
          <li onClick={() => setActualTab("HOME")}>
            <HomeSVG
              className={
                actualTab === "HOME"
                  ? "Navbar__icon Navbar__icon-active"
                  : "Navbar__icon"
              }
            />
          </li>
          <li onClick={() => setActualTab("PROJECTS")}>
            <FolderSVG
              className={
                actualTab === "PROJECTS"
                  ? "Navbar__icon Navbar__icon-active"
                  : "Navbar__icon"
              }
            />
          </li>
          <li onClick={() => setActualTab("CONTACT")}>
            <UserSVG
              className={
                actualTab === "CONTACT"
                  ? "Navbar__icon Navbar__icon-active"
                  : "Navbar__icon"
              }
            />
          </li>
        </ul>
        <motion.div
          className="Navbar__lightContainer"
          animate={{
            x:
              actualTab === "HOME" ? 12.4 : actualTab === "PROJECTS" ? 76 : 140,
          }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="Navbar__light" />
          <div className="Navbar__border" />
        </motion.div>
      </div>
    </Styles>
  );
};

Navbar.defaultProps = {};

export default Navbar;
