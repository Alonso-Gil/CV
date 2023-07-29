import { PersonalInformationProps as Props } from "./PersonalInformation.types";
import Styles from "./PersonalInformation.styles";

import PersonalInformationSVG from "assets/images/personal-information-icon.svg";

const PersonalInformation: React.FC<Props> = (props) => {
  return (
    <Styles className="PersonalInformation">
      <div className="PersonalInformation__personal-icon-container">
        <PersonalInformationSVG className="PersonalInformation__personal-icon" />
      </div>
      <p className="PersonalInformation__title">Personal Information</p>
      <p className="PersonalInformation__description">
        I am a{" "}
        <b>
          web platform and application developer with React and React Native
        </b>
        , with interests in personal and professional growth, in the process of
        becoming a <b>Fullstack developer at MERN</b> and one day study and
        learn about Artificial Intelligence.
      </p>
    </Styles>
  );
};

PersonalInformation.defaultProps = {};

export default PersonalInformation;
