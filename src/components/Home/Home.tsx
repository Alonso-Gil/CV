import { useCycle, useScroll, useSpring, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { TabsMenu } from "types/common.types";

import Navbar from "../Navbar/Navbar";
import SideMenuMotion from "../SideMenuMotion/SideMenuMotion";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import HomeContent from "components/TabsContent/HomeContent/HomeContent";
import useGlobal from "contexts/global/global.hooks";

const Home: React.FC<Props> = (props) => {
  const [isOpen, toggleOpen] = useCycle(true, false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [actualTab, setActualTab] = useState<TabsMenu>("HOME");
  const { setShowSideMenu } = useGlobal();

  useEffect(() => {
    setShowSideMenu(isOpen);
  }, [isOpen, setShowSideMenu]);

  const renderContentTab = () => {
    switch (actualTab) {
      case "BINNACLE":
        return <p className="Home__coming-soon loader">Próximamente...</p>;
      case "CONTACT":
        return <p className="Home__coming-soon loader">Próximamente...</p>;
      default:
        return <HomeContent />;
    }
  };

  return (
    <Styles className="Home" showSideMenu={isOpen}>
      <SideMenuMotion
        className="Home__sideMenu"
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <header className="Home__header">
        <Navbar actualTab={actualTab} setActualTab={setActualTab} />
      </header>
      <main className="Home__main">
        <motion.div className="Home__progress-bar" style={{ scaleX }} />
        {renderContentTab()}
      </main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
