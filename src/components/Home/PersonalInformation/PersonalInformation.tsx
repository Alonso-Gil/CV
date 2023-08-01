import { PersonalInformationProps as Props } from "./PersonalInformation.types";
import Styles from "./PersonalInformation.styles";
import Image from "next/image";

import MeJPG from "assets/images/me.jpg";

const PersonalInformation: React.FC<Props> = (props) => {
  return (
    <Styles className="PersonalInformation">
      <div className="PersonalInformation__imageContainer">
        <Image
          src={MeJPG}
          alt="Imagen de fondo de DCStudio"
          className="PersonalInformation__image"
        />
      </div>
      <div className="PersonalInformation__textContainer">
        <p className="PersonalInformation__title">About me</p>
        <p className="PersonalInformation__description">
          <b>Developer with 4 years of experience </b> of web platforms and
          applications using <b> react (Next.js) and react native (Expo).</b>
        </p>
        <p className="PersonalInformation__description">
          Interest in personal and professional growth, in the process of
          becoming a <b>Fullstack developer at MERN</b> and one day study and
          learn about Artificial Intelligence.
        </p>
      </div>
    </Styles>
  );
};

PersonalInformation.defaultProps = {};

export default PersonalInformation;
