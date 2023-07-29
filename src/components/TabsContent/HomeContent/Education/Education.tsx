import { EducationProps as Props } from "./Education.types";
import Styles from "./Education.styles";

import SchoolSVG from "assets/images/school.svg";

const Education: React.FC<Props> = (props) => {
  return (
    <Styles className="Education">
      <div className="Education__information">
        <div className="Education__personal-icon-container">
          <SchoolSVG className="Education__personal-icon" />
        </div>
        <p className="Education__title">Education</p>
        <p className="Education__description">
          Graduated in{" "}
          <b>Ingeniería en Sistemas Estratégicos de la Información (ISEI)</b>,
          with a specialization in <b>software development</b>, belonging to the
          Universidad Politécnica de Aguascalientes (UPA).
        </p>
      </div>
    </Styles>
  );
};

Education.defaultProps = {};

export default Education;
