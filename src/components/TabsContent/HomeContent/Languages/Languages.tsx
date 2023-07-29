import { LanguagesProps as Props } from "./Languages.types";
import Styles from "./Languages.styles";

import WorldSVG from "assets/images/world.svg";
import GermanySVG from "assets/images/Countries/germany.svg";
import SpainSVG from "assets/images/Countries/spain.svg";
import UnitedStatesSVG from "assets/images/Countries/usa.svg";

const Languages: React.FC<Props> = (props) => {
  return (
    <Styles className="Languages">
      <div className="Languages__personal-icon-container">
        <WorldSVG className="Languages__personal-icon" />
      </div>
      <p className="Languages__title">Languages</p>
      <div className="Languages__container">
        <div className="Languages__item">
          <div className="Languages__flag-container">
            <p className="Languages__sub-title">Spanish</p>
            <SpainSVG className="Languages__personal-icon" />
          </div>
          <p className="Languages__description">
            <b>C2:</b> Native or Bilingual Proficiency
          </p>
        </div>
        <div className="Languages__item">
          <div className="Languages__flag-container">
            <p className="Languages__sub-title">English</p>
            <UnitedStatesSVG className="Languages__personal-icon" />
          </div>
          <p className="Languages__description">
            <b>B2:</b> Professional Working Proficiency
          </p>
        </div>
        <div className="Languages__item">
          <div className="Languages__flag-container">
            <p className="Languages__sub-title">German</p>
            <GermanySVG className="Languages__personal-icon" />
          </div>
          <p className="Languages__description">
            <b>A1:</b> Basic and introductory concepts
          </p>
        </div>
      </div>
    </Styles>
  );
};

Languages.defaultProps = {};

export default Languages;
