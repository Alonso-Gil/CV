import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Styles from "./SideMenu.styles";
import { SideMenuProps as Props } from "./SideMenu.types";

import ProfilePNG from "assets/profile.png";
import WhatsAppSVG from "assets/whatsapp.svg";
import GitHubSVG from "assets/github.svg";
import LinkedInSVG from "assets/linkedin.svg";

const SideMenu: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <Styles className={`SideMenu ${className}`}>
      <div className="SideMenu__imageContainer">
        <Image src={ProfilePNG} alt="Profile image" width={160} />
      </div>
      <motion.div className="SideMenu__socialMediaContainer">
        <motion.div
          className="SideMenu__socialMediaItem"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <WhatsAppSVG />
        </motion.div>
        <motion.div
          className="SideMenu__socialMediaItem"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <GitHubSVG />
        </motion.div>
        <motion.div
          className="SideMenu__socialMediaItem"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <LinkedInSVG />
        </motion.div>
      </motion.div>
      <motion.div className="SideMenu__mainContentContainer">
        {Array.from(new Array(5)).map((_, index) => (
          <motion.div
            className="SideMenu__mainContentItem"
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          ></motion.div>
        ))}
      </motion.div>
    </Styles>
  );
};

SideMenu.defaultProps = {
  className: "",
};

export default SideMenu;
