import React, { MouseEvent, useEffect, useState } from "react";
import { Collapse } from "antd";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import Styles from "./SpotLightContainer.styles";
import { SpotLightContainerProps as Props } from "./SpotLightContainer.types";
import { palette } from "styles/utils/variables";

const { Panel } = Collapse;

const SpotLightContainer: React.FC<Props> = (props) => {
  const { accordion, mainContainer } = props;
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const constantColor = useMotionValue(palette.contrast);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const container = document.querySelector(".SpotLightContainer");
    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Styles className="SpotLightContainer" onMouseMove={handleMouseMove}>
      <motion.div
        className="SpotLightContainer__motion"
        style={{
          background: useMotionTemplate`
            radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            ${constantColor},
            transparent 80%
          )`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        exit={{
          opacity: 0,
        }}
      />
      <div className="SpotLightContainer__container">{mainContainer}</div>
      <Collapse accordion className="SpotLightContainer__accordion">
        <Panel
          header="Project information"
          key="1"
          className="SpotLightContainer__panel"
        >
          {accordion}
        </Panel>
      </Collapse>
    </Styles>
  );
};

SpotLightContainer.defaultProps = {};

export default SpotLightContainer;
