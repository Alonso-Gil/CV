import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Styles from "./ImagesSplide.styles";
import { ImagesSplideProps as Props, RenderImages } from "./ImagesSplide.types";
import useGlobal from "contexts/global/global.hooks";

import Css3SVG from "assets/css3.svg";
import Html5SVG from "assets/html5.svg";
import ReactSVG from "assets/react.svg";
import ReduxSVG from "assets/redux.svg";
import TypescriptSVG from "assets/typescript.svg";
import JavascriptSVG from "assets/javascript.svg";

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
  ];

  return (
    <Styles className={`ImagesSplide ${className}`}>
      <Splide
        aria-label="Technologies"
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          gap: "10px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 3,
          autoWidth: true,
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
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: 0.4,
          },
        }}
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
