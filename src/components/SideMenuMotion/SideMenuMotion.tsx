import { motion } from "framer-motion";
import React, { useRef } from "react";

import { useDimensions } from "../../utils/useDimensions";
import SideMenu from "../SideMenu/SideMenu";
import Styles from "./SideMenuMotion.styles";
import { SideMenuMotionProps as Props } from "./SideMenuMotion.types";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delay: 0.3,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const container = {
  open: {
    transition: {
      delay: 0.3,
    },
  },
  closed: {
    top: "6rem",
  },
};

const SideMenuMotion: React.FC<Props> = (props) => {
  const { className, isOpen, toggleOpen } = props;
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#BF9B6F"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <Styles className={`SideMenuMotion ${className}`} isOpen={isOpen}>
      <motion.nav
        className="SideMenuMotion__container"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={container}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="SideMenuMotion__background" variants={sidebar}>
          <SideMenu />
        </motion.div>
        <button className="SideMenuMotion__button" onClick={() => toggleOpen()}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.nav>
    </Styles>
  );
};

SideMenuMotion.defaultProps = {
  className: "",
};

export default SideMenuMotion;
