import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { notification } from "antd";

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
          const { id, image, link, modalMessage } = socialMediaImage;

          return (
            <motion.a
              key={id}
              className="SideMenu__socialMediaItem"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              target="_blank"
              href={link}
              onClick={() =>
                modalMessage
                  ? notification.info({
                      message: "Advertencia!",
                      description: modalMessage,
                      placement: "bottomLeft",
                      duration: 120,
                    })
                  : null
              }
            >
              {image}
            </motion.a>
          );
        })}
      </motion.div>
      <div className="SideMenu__mainContentContainer">
        <motion.div
          className="SideMenu__mainContentItem"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <h2 className="SideMenu__subTitle">Email</h2>
          <p className="SideMenu__description">alonsogil117@gmail.com</p>
        </motion.div>
        <motion.div
          className="SideMenu__mainContentItem"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <h2 className="SideMenu__subTitle">Location</h2>
          <p className="SideMenu__description">Aguascalientes, México</p>
        </motion.div>
        <motion.div
          className="SideMenu__mainContentItem"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <h2 className="SideMenu__subTitle">Cellphone</h2>
          <p className="SideMenu__description">+52 (449) 365 6642</p>
        </motion.div>
      </div>
    </Styles>
  );
};

SideMenu.defaultProps = {
  className: "",
};

export default SideMenu;
