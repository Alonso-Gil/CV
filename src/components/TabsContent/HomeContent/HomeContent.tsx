import React, { useState } from "react";
import { motion } from "framer-motion";

import Styles from "./HomeContent.styles";
import { HomeContentProps as Props } from "./HomeContent.types";

import ImagesSplide from "./ImagesSplide/ImagesSplide";
import TextsSplide from "./TextsSplide/TextsSplide";
import useGlobal from "contexts/global/global.hooks";
import { skillsData } from "./HomeContent.helpers";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Certificates from "./Certificates/Certificates";
import Languages from "./Languages/Languages";
import Education from "./Education/Education";

import BrushSVG from "assets/brush.svg";

const HomeContent: React.FC<Props> = (props) => {
  const [showStyle, setShowStyle] = useState(false);
  const { showSideMenu } = useGlobal();
  const { otherSkills, principalSkills } = skillsData;
  const variants = {
    visible: {
      opacity: 1,
      display: "flex",
    },
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <Styles className="HomeContent" showSideMenu={showSideMenu}>
      <div className="HomeContent__skillsContainer">
        <div className="HomeContent__container">
          <h2 className="HomeContent__title">Principal Skills</h2>
          <button
            className="HomeContent__button"
            onClick={() => setShowStyle(!showStyle)}
          >
            <BrushSVG className="HomeContent__brush" />
          </button>
        </div>
        <motion.div
          className="HomeContent__content"
          animate={showStyle ? variants.visible : variants.hidden}
          transition={{ duration: 1 }}
        >
          {showStyle ? (
            <>
              <ImagesSplide className="HomeContent__splide" />
              <h2 className="HomeContent__sub-title">Other Skills</h2>
              <TextsSplide
                className="HomeContent__splide"
                otherSkills={otherSkills}
              />
            </>
          ) : null}
        </motion.div>
        <motion.div
          className="HomeContent__content-static"
          animate={showStyle ? variants.hidden : variants.visible}
          transition={{ duration: 1 }}
        >
          {!showStyle ? (
            <>
              <div className="HomeContent__skills-container">
                {principalSkills.map((skill, index) => (
                  <p className="HomeContent__skills" key={index}>
                    {skill}
                  </p>
                ))}
              </div>
              <h2 className="HomeContent__sub-title">Other Skills</h2>
              <div className="HomeContent__other-skills-container">
                {otherSkills.map((skill, index) => (
                  <p className="HomeContent__other-skills" key={index}>
                    {skill}
                  </p>
                ))}
              </div>
            </>
          ) : null}
        </motion.div>
      </div>
      <div className="HomeContent__two-blocks">
        <PersonalInformation />
        <Education />
      </div>
      <div className="HomeContent__two-blocks">
        <Certificates />
        <Languages />
      </div>
    </Styles>
  );
};

HomeContent.defaultProps = {};

export default HomeContent;
