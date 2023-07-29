import { motion, useScroll, useSpring } from "framer-motion";
import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { TabsMenu } from "types/common.types";
import Image from "next/image";

import Navbar from "../Navbar/Navbar";
// import SideMenuMotion from "../SideMenuMotion/SideMenuMotion";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import HomeContent from "components/TabsContent/HomeContent/HomeContent";
import Projects from "components/TabsContent/Projects/Projects";
import SwitchDarkMode from "components/Global/SwitchDarkMode/SwitchDarkMode";

import BackgroundJPG from "assets/images/mountains2.jpg";
import Background2JPG from "assets/images/background.jpg";

const Home: React.FC<Props> = (props) => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [actualTab, setActualTab] = useState<TabsMenu>("HOME");
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

  return (
    <Styles className="Home">
      <SwitchDarkMode />
      <header className="Home__header">
        <Navbar actualTab={actualTab} setActualTab={setActualTab} />
      </header>
      <motion.main
        className="Home__main"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        {/* <motion.div className="Home__progress-bar" style={{ scaleX }} /> */}
        <div className="Home__background">
          <div className="Home__colorOverlay" />
          <Image
            src={BackgroundJPG}
            alt="Imagen de fondo de DCStudio"
            className="Home__backgroundImage"
          />
        </div>
        <div className="Home__cardContainer">
          <div className="Home__card"></div>
        </div>
        <div className="Home__cardContainer2">
          <div className="Home__card2">
            <p className="Home__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              nostrum amet nam labore aperiam, voluptate at ullam minus,
              praesentium mollitia veniam ipsum modi sed neque saepe magnam
              accusantium nulla repellendus!
            </p>
          </div>
          <div className="Home__imageContainer">
            <Image
              src={Background2JPG}
              alt="Imagen de fondo de DCStudio"
              className="Home__image"
            />
            <p className="Home__firstContainer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              obcaecati nam dolorem quasi esse laborum nulla. Saepe quae atque
              aliquam quidem a optio voluptatem eum eligendi veniam, dignissimos
              harum assumenda.
            </p>
            <div className="Home__secondContainer"></div>
          </div>
        </div>
      </motion.main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
