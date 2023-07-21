import { useCycle, useScroll, useSpring, motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { TabsMenu } from "types/common.types";

import Navbar from "../Navbar/Navbar";
import SideMenuMotion from "../SideMenuMotion/SideMenuMotion";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import HomeContent from "components/TabsContent/HomeContent/HomeContent";
import useGlobal from "contexts/global/global.hooks";
import Projects from "components/TabsContent/Projects/Projects";
import SwitchDarkMode from "components/Global/SwitchDarkMode/SwitchDarkMode";

const Home: React.FC<Props> = (props) => {
  const [isOpen, toggleOpen] = useCycle(true, false);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [actualTab, setActualTab] = useState<TabsMenu>("HOME");
  const { setShowSideMenu } = useGlobal();
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderContentTab = () => {
    switch (actualTab) {
      case "PROJECTS":
        return <Projects />;
      case "CONTACT":
        return <p className="Home__coming-soon loader">Próximamente...</p>;
      default:
        return <HomeContent />;
    }
  };

  useEffect(() => {
    controls.start("visible");
    window.scrollTo(0, 0);
  }, [controls]);

  useEffect(() => {
    setShowSideMenu(isOpen);
  }, [isOpen, setShowSideMenu]);

  return (
    <Styles className="Home" showSideMenu={isOpen}>
      <SwitchDarkMode />
      <SideMenuMotion
        className="Home__sideMenu"
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <header className="Home__header">
        <Navbar actualTab={actualTab} setActualTab={setActualTab} />
      </header>
      <motion.main
        className="Home__main"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <motion.div className="Home__progress-bar" style={{ scaleX }} />
        {renderContentTab()}
      </motion.main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
