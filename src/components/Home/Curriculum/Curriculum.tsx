import React from "react";

import Styles from "./Curriculum.styles";
import { CurriculumProps as Props } from "./Curriculum.types";

const Curriculum: React.FC<Props> = (props) => {
  return (
    <Styles className="Curriculum">
      <div className="Curriculum__cardContainer">
        <div className="Curriculum__card">{/* <HomeContent /> */}</div>
        <div className="Curriculum__bottomCard" />
      </div>
    </Styles>
  );
};

Curriculum.defaultProps = {};

export default Curriculum;
