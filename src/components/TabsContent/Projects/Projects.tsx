import React from "react";
import Image from "next/image";

import Styles from "./Projects.styles";
import { ProjectsProps as Props } from "./Projects.types";
import ProjectDk from "./ProjectDk/ProjectDk";

import DKSVG from "assets/images/DK/dk-logo.png";
import DKMallSVG from "assets/images/DK/dk-mall.png";
import SpotLightContainer from "components/Global/SpotLightContainer/SpotLightContainer";

const Projects: React.FC<Props> = (props) => {
  return (
    <Styles className="Projects">
      <SpotLightContainer
        mainContainer={
          <>
            <div className="Projects__left Projects__item">
              <div className="Projects__header">
                <Image src={DKSVG} alt="DK Logo" className="Projects__icon" />
                <div className="Projects__">
                  <h2 className="Projects__title">DK MANAGEMENT</h2>
                  <h3 className="Projects__subtitle">TRADE EC</h3>
                </div>
              </div>
              <p className="Projects__description">
                <b>DK Management Services S.A.</b> is a company created to
                provide its clients with a leading service in the management and
                operation of <b>shopping centers.</b>
              </p>
              <p className="Projects__description">
                Supported by more than 20 years of experience and success in
                managing shopping centers in the Ecuadorian market. Counting on
                a highly qualified human staff, working with modern
                organizational processes and using state-of-the-art technology,
                which allows us to ensure excellent management of your business.
              </p>
            </div>
            <div className="Projects__right Projects__item">
              <Image src={DKMallSVG} alt="DK Logo" className="Projects__mall" />
              <p className="Projects__mallDescription">
                Quicentro shopping center, located in Quito, Ecuador. One of the
                many malls that DK has.
              </p>
            </div>
          </>
        }
        accordion={<ProjectDk />}
      />
    </Styles>
  );
};

Projects.defaultProps = {};

export default Projects;
