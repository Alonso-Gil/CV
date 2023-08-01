import React from "react";
import { motion } from "framer-motion";

import Styles from "./PresentationCard.styles";
import { PresentationCardProps as Props } from "./PresentationCard.types";

import DownloadSVG from "assets/images/icons/download.svg";
import ScrollSVG from "assets/images/icons/scroll.svg";

const PresentationCard: React.FC<Props> = (props) => {
  return (
    <Styles className="PresentationCard">
      <div className="PresentationCard__textContainer">
        <p className="PresentationCard__name">Alonso Gil Pérez</p>
        <p className="PresentationCard__rol">MID FRONT END DEVELOPER</p>
        <div className="PresentationCard__buttonsContainer">
          <motion.button
            className="PresentationCard__button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 1 }}
            type="button"
          >
            Download CV
            <DownloadSVG className="PresentationCard__icon" />
          </motion.button>
          <motion.button
            className="PresentationCard__button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 1 }}
            type="button"
          >
            Projects
            <ScrollSVG className="PresentationCard__icon" />
          </motion.button>
        </div>
      </div>
    </Styles>
  );
};

PresentationCard.defaultProps = {};

export default PresentationCard;
