import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import Styles from "./SwitchDarkMode.styles";
import { SwitchDarkModeProps as Props } from "./SwitchDarkMode.types";
import useTheme from "contexts/theme/theme.hooks";
import themes from "styles/theme";

import SunSVG from "assets/sun.svg";
import MoonSVG from "assets/moon.svg";

const SwitchDarkMode: React.FC<Props> = (props) => {
  const { setSelectedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const controls = useAnimation();
  const { dark, light } = themes;

  const darkModeColor = {
    light: {
      backgroundImage:
        "radial-gradient(circle farthest-corner at 10% 20%, #FDC830 0%, #f99f34 50%, #F37335 100%)",
    },
    dark: {
      backgroundImage:
        "radial-gradient(circle farthest-corner at 10% 20%, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    },
  };

  const handleIsDarkMode = () => {
    if (isDarkMode) {
      setSelectedTheme(dark);
    } else {
      setSelectedTheme(light);
    }
  };

  useEffect(() => {
    controls.start(isDarkMode ? "light" : "dark");
  }, [isDarkMode, controls]);

  return (
    <Styles className="SwitchDarkMode">
      <motion.div
        className="SwitchDarkMode__container"
        data-darkmode={isDarkMode}
        onClick={(event) => {
          event.stopPropagation();
          setIsDarkMode((prev) => !prev);
          handleIsDarkMode();
        }}
        variants={darkModeColor}
        style={{
          justifyContent: isDarkMode ? "flex-end" : "flex-start",
          userSelect: "none",
        }}
        initial={isDarkMode ? "light" : "dark"}
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div layout className="SwitchDarkMode__handle">
          {!isDarkMode ? (
            <MoonSVG className="SwitchDarkMode__moonIcon" />
          ) : (
            <SunSVG className="SwitchDarkMode__sunIcon" />
          )}
        </motion.div>
      </motion.div>
    </Styles>
  );
};

SwitchDarkMode.defaultProps = {};

export default SwitchDarkMode;
