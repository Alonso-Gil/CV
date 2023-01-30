import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Styles from "./TextsSplide.styles";
import { TextsSplideProps as Props } from "./TextsSplide.types";
import useGlobal from "contexts/global/global.hooks";

const TextsSplide: React.FC<Props> = (props) => {
  const { className, otherSkills } = props;
  const { showSideMenu } = useGlobal();

  console.log({ otherSkills });

  return (
    <Styles className={`TextsSplide ${className}`}>
      <Splide
        aria-label="Technologies"
        className="HomeContent__splide"
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          autoWidth: true,
          drag: "free",
          gap: "10px",
          arrows: false,
          pagination: false,
          width: 500,
          direction: "rtl",
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: 0.4,
          },
          breakpoints: showSideMenu
            ? {
                2000: { width: 500 },
                1000: { width: 280 },
                620: { width: 200 },
                340: { width: 180 },
              }
            : {
                2000: { width: 500 },
                1000: { width: 280 },
                620: { width: 200 },
                340: { width: 180 },
              },
        }}
      >
        {otherSkills.map((skills, index) => (
          <SplideSlide>
            <p className="HomeContent__other-skills" key={index}>
              {skills}
            </p>
          </SplideSlide>
        ))}
      </Splide>
    </Styles>
  );
};

TextsSplide.defaultProps = {
  className: "",
};

export default TextsSplide;
