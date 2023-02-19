import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Styles from "./SideMenu.styles";
import { SideMenuProps as Props } from "./SideMenu.types";
import { socialMediaImages } from "./SideMenu.helpers";

import ProfilePNG from "assets/profile.png";

const SideMenu: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <Styles className={`SideMenu ${className}`}>
      <div className="SideMenu__imageContainer">
        <Image src={ProfilePNG} alt="Profile image" width={160} priority />
      </div>
      <h1 className="SideMenu__title">Front end Developer</h1>
      <motion.div className="SideMenu__socialMediaContainer">
        {socialMediaImages.map((socialMediaImage) => {
          const { id, image, link } = socialMediaImage;

          return (
            <motion.a
              key={id}
              className="SideMenu__socialMediaItem"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              target="_blank"
              href={link}
            >
              {image}
            </motion.a>
          );
        })}
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
