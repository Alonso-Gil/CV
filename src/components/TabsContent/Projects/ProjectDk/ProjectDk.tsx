import React from "react";

import Styles from "./ProjectDk.styles";
import { ProjectDkProps as Props } from "./ProjectDk.types";

import CalendarSVG from "assets/images/icons/calendar.svg";

const ProjectDk: React.FC<Props> = (props) => {
  return (
    <Styles className="ProjectDk">
      <div className="ProjectDk__titleContainer">
        <h4 className="ProjectDk__title">DK MALLS</h4>
        <div className="ProjectDk__line" />
      </div>
      <div className="ProjectDk__dateContainer">
        <CalendarSVG className="ProjectDk__icon" />
        <p className="ProjectDk__date">November 26, 2022 to July 12, 2023</p>
      </div>
      <div className="ProjectDk__descriptionContainer">
        <div>
          <h5 className="ProjectDk__descriptionTitle">Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            amet tempore, labore quae doloribus nam. Suscipit quibusdam impedit
            a asperiores, tempora libero, minus in provident fuga modi laborum
            possimus cum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            amet tempore, labore quae doloribus nam. Suscipit quibusdam impedit
            a asperiores, tempora libero, minus in provident fuga modi laborum
            possimus cum!
          </p>
        </div>
        <div>
          <h5 className="ProjectDk__descriptionTitle">Technologies</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            amet tempore, labore quae doloribus nam. Suscipit quibusdam impedit
            a asperiores, tempora libero, minus in provident fuga modi laborum
            possimus cum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            amet tempore, labore quae doloribus nam. Suscipit quibusdam impedit
            a asperiores, tempora libero, minus in provident fuga modi laborum
            possimus cum!
          </p>
        </div>
      </div>
    </Styles>
  );
};

ProjectDk.defaultProps = {};

export default ProjectDk;
