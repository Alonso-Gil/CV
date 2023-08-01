import React, { useState } from "react";
import { motion } from "framer-motion";

import Styles from "./HomeContent.styles";
import { HomeContentProps as Props } from "./HomeContent.types";

import ImagesSplide from "./ImagesSplide/ImagesSplide";
import TextsSplide from "./TextsSplide/TextsSplide";
import useGlobal from "contexts/global/global.hooks";
import { skillsData } from "./HomeContent.helpers";
// import PersonalInformation from "../../Home/PersonalInformation/PersonalInformation";
// import Certificates from "./Certificates/Certificates";
// import Languages from "./Languages/Languages";
// import Education from "./Education/Education";
import SkillCard from "./SkillCard/SkillCard";

import BrushSVG from "assets/images/brush.svg";

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
      display: "none",
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
          <ImagesSplide className="HomeContent__splide" />
          <h2 className="HomeContent__sub-title">Other Skills</h2>
          <TextsSplide
            className="HomeContent__splide"
            otherSkills={otherSkills}
          />
        </motion.div>
        <motion.div
          className="HomeContent__content-static"
          animate={showStyle ? variants.hidden : variants.visible}
          transition={{ duration: 1 }}
        >
          <div className="HomeContent__itemsSkillsContainer">
            {principalSkills.map((skill, index) => {
              return <SkillCard skill={skill} principal key={index} />;
            })}
          </div>
          <h2 className="HomeContent__sub-title">Other Skills</h2>
          <div className="HomeContent__itemsSkillsContainer">
            {otherSkills.map((skill, index) => (
              <SkillCard skill={skill} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </Styles>
  );
};

HomeContent.defaultProps = {};

export default HomeContent;
