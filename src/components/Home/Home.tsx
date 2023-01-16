import { useCycle, useScroll, useSpring, motion } from "framer-motion";
import React from "react";

import Navbar from "../Navbar/Navbar";
import SideMenuMotion from "../SideMenuMotion/SideMenuMotion";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  const [isOpen, toggleOpen] = useCycle(true, false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Styles className="Home" showSideMenu={isOpen}>
      <SideMenuMotion
        className="Home__sideMenu"
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <header className="Home__header">
        <Navbar />
      </header>
      <main className="Home__main">
        <motion.div className="Home__progress-bar" style={{ scaleX }} />
        <motion.div className="Home__first" />
        <motion.div className="Home__second" />
        <motion.div className="Home__third" />
        <motion.div className="Home__fourth" />
        <motion.div className="Home__fifth" />
        <motion.div className="Home__sixth" />
      </main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
