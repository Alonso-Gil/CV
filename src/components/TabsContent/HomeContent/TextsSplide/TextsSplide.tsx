import React from "react";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Styles from "./TextsSplide.styles";
import { TextsSplideProps as Props } from "./TextsSplide.types";
import useGlobal from "contexts/global/global.hooks";
import { divideArray, splideConfig } from "./TextsSplide.helper";

const TextsSplide: React.FC<Props> = (props) => {
  const { className, otherSkills } = props;
  const { showSideMenu } = useGlobal();
  const mewArray = divideArray(otherSkills);

  return (
    <Styles className={`TextsSplide ${className}`}>
      {mewArray.map((item, index) => {
        const direction = index % 2 === 0;

        return (
          <Splide
            key={index}
            aria-label="Technologies"
            className="HomeContent__splide"
            extensions={{ AutoScroll }}
            options={splideConfig(showSideMenu, direction) as Options}
          >
            {item.map((skill, index) => (
              <SplideSlide key={index}>
                <p className="HomeContent__other-skills">{skill}</p>
              </SplideSlide>
            ))}
          </Splide>
        );
      })}
    </Styles>
  );
};

TextsSplide.defaultProps = {
  className: "",
};

export default TextsSplide;
