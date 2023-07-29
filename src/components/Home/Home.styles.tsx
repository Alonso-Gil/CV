import styled from "styled-components";

import { HomeStyledProps as Props } from "./Home.types";
import CONSTANTS from "config/constants";

const { tablet, mobile } = CONSTANTS.BREAKPOINTS;

const HomeStyled = styled.div<Props>`
  background-color: var(--palette-background);
  display: grid;
  position: relative;
  min-height: var(--sizes-page-minHeight);
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main";
  z-index: 0;

  @media (max-width: ${tablet}px) {
    grid-template-areas: "main" "main";
    grid-template-columns: 1fr;
  }

  .Home {
    &__sideMenu {
      position: fixed;
      width: 32rem;

      @media (max-width: ${tablet}px) {
        width: 100%;
      }
    }

    &__header {
      height: 6rem;
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.3s;
      z-index: 10;
    }

    &__main {
      grid-area: main;
      background-color: #4f1a17;
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }

    &__background {
      width: 100%;
      overflow: hidden;
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      position: relative;
    }

    &__backgroundImage {
      object-fit: cover;
      width: 100%;
      max-height: 80rem;
      z-index: 1;
      /* mask-image: linear-gradient(to top, transparent, black); */
    }

    &__colorOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(208, 80, 73, 0.2);
      filter: blur(1rem);
    }

    &__cardContainer {
      width: 100%;
      z-index: 2;
      clip-path: polygon(0 11%, 100% 0, 100% 100%, 0 100%);
      margin-top: -30rem;
      max-width: 100rem;
      align-self: center;
    }

    &__card {
      width: 100%;
      height: 100rem;
      background-color: rgb(125, 38, 35, 0.7);
      backdrop-filter: blur(4.5px);
      -webkit-backdrop-filter: blur(4.5px);
      margin-bottom: 10rem;
      transition-property: background-color, border;
      transition-duration: 1s;
      mask-image: linear-gradient(to top, transparent, black);

      :hover {
        background-color: rgb(197, 68, 53, 0.7);
        transition-property: background-color, border;
        transition-duration: 0.3s;
      }
    }

    &__cardContainer2 {
      background-color: #181818;
      width: 100%;
      margin-bottom: 20rem;
      padding-bottom: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__card2 {
      width: 100%;
      padding: 4rem;
      max-width: 100rem;
      mask-image: linear-gradient(to top, transparent, black);
    }

    &__text {
      font-size: 4rem;
      font-weight: 600;
      color: #ebebeb;
    }

    &__imageContainer {
      width: 100%;
      max-width: 100rem;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      height: 80rem;
    }

    &__image {
      object-fit: cover;
      width: 100%;
      max-height: 80rem;
      z-index: 1;
      position: absolute;
    }

    &__firstContainer {
      flex-basis: 50%;
      width: 100%;
      height: 100%;
      background-color: rgb(255, 255, 255, 0.1);
      backdrop-filter: blur(4.5px);
      -webkit-backdrop-filter: blur(4.5px);
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8rem;
      color: rgb(255, 255, 255);
      font-size: 3rem;
    }

    &__secondContainer {
      flex-basis: 50%;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    &__progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 0.4rem;
      background-color: var(--palette-white);
      transform-origin: 0%;
      transition: all 0.3s;
      z-index: 2;

      @media (max-width: ${tablet}px) {
        margin-left: unset;
      }
    }

    &__switch-dark-mode {
      position: absolute;
      bottom: 4rem;
      right: 4rem;
    }

    &__coming-soon {
      width: 100%;
      font-weight: bold;
      font-style: italic;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      color: var(--palette-quaternary);
      border-radius: 1rem;
      padding: 4rem;

      @media (max-width: ${mobile}px) {
        font-size: 3rem;
        padding: 2rem;
      }
    }

    &__footer {
    }
  }
`;

export default HomeStyled;
