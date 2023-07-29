import React from "react";

import Styles from "./SkillCard.styles";
import { SkillCardProps as Props } from "./SkillCard.types";

const SkillCard: React.FC<Props> = (props) => {
  const { skill, principal } = props;

  return (
    <Styles className="SkillCard">
      <p className={principal ? "SkillCard__skill" : "SkillCard__otherSkill"}>
        {skill}
      </p>
    </Styles>
  );
};

SkillCard.defaultProps = {};

export default SkillCard;
