import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Styles from "./ImagesSplide.styles";
import { ImagesSplideProps as Props, RenderImages } from "./ImagesSplide.types";
import useGlobal from "contexts/global/global.hooks";
import { splideConfig } from "utils/common.utils";

import Css3SVG from "assets/images/SkillsImages/css3.svg";
import Html5SVG from "assets/images/SkillsImages/html5.svg";
import ReactSVG from "assets/images/SkillsImages/react.svg";
import ReduxSVG from "assets/images/SkillsImages/redux.svg";
import TypescriptSVG from "assets/images/SkillsImages/typescript.svg";
import JavascriptSVG from "assets/images/SkillsImages/javascript.svg";
import NextSVG from "assets/images/SkillsImages/next.svg";

const ImagesSplide: React.FC<Props> = (props) => {
  const { className } = props;
  const { showSideMenu } = useGlobal();

  const renderImages: RenderImages[] = [
    { id: 1, content: <JavascriptSVG className="ImagesSplide__image" /> },
    { id: 2, content: <Css3SVG className="ImagesSplide__image" /> },
    { id: 3, content: <Html5SVG className="ImagesSplide__image" /> },
    { id: 4, content: <ReactSVG className="ImagesSplide__image" /> },
    { id: 5, content: <ReduxSVG className="ImagesSplide__image" /> },
    { id: 6, content: <TypescriptSVG className="ImagesSplide__image" /> },
    { id: 7, content: <NextSVG className="ImagesSplide__image" /> },
  ];

  return (
    <Styles className={`ImagesSplide ${className}`}>
      <Splide
        aria-label="Technologies"
        extensions={{ AutoScroll }}
        // @ts-ignore Esta librería es muy mala para manejar estilos responsivos
        options={splideConfig(showSideMenu) as Options}
      >
        {renderImages.map((image: RenderImages) => {
          const { id, content } = image;
          return (
            <SplideSlide className="HomeContent__image" key={id}>
              {content}
            </SplideSlide>
          );
        })}
      </Splide>
    </Styles>
  );
};

ImagesSplide.defaultProps = {
  className: "",
};

export default ImagesSplide;
