import React, { useState } from "react";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { Modal } from "antd";
import Image from "next/image";

import Styles from "./TextsSplide.styles";
import { TextsSplideProps as Props } from "./TextsSplide.types";
import useGlobal from "contexts/global/global.hooks";
import { divideArray, splideConfig } from "./TextsSplide.helpers";

import ChallengerPNG from "assets/challenger-2022.png";

const TextsSplide: React.FC<Props> = (props) => {
  const { className, otherSkills } = props;
  const { showSideMenu } = useGlobal();
  const mewArray = divideArray(otherSkills);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Styles className={`TextsSplide ${className}`}>
      {mewArray.map((item, index) => {
        const direction = index % 2 === 0;

        return (
          <Splide
            key={index}
            aria-label="Technologies"
            className="HomeContent__splide"
            extensions={{ AutoScroll }}
            options={splideConfig(showSideMenu, direction) as Options}
          >
            {item.map((skill, index) => (
              <SplideSlide key={index}>
                <p
                  className="HomeContent__other-skills"
                  onClick={() => (skill === "Challenger" ? showModal() : null)}
                >
                  {skill}
                </p>
              </SplideSlide>
            ))}
          </Splide>
        );
      })}
      <Modal
        title="Challenger mi loco, tu que eres?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
      >
        <Image src={ChallengerPNG} alt="Challenger" width={470} priority />
      </Modal>
    </Styles>
  );
};

TextsSplide.defaultProps = {
  className: "",
};

export default TextsSplide;
