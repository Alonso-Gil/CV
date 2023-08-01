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
      background-color: var(--palette-background);
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }

    &__background {
      width: 100%;
      height: 80rem;
      overflow: hidden;
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      position: relative;
      display: flex;

      &__firstContainer {
        z-index: 2;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      &__secondContainer {
        z-index: 2;
      }
    }

    &__colorOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    &__backgroundImage {
      object-fit: cover;
      width: 100%;
      max-height: 80rem;
      z-index: 1;
      position: absolute;
      filter: saturate(75%);
    }

    &__firstContainer {
      width: 100%;
      z-index: 2;
      clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 100%);
      margin-top: -30rem;
      max-width: 100rem;
      align-self: center;
    }

    &__bottomCard {
      width: 100%;
      height: 20rem;
      background-color: var(--palette-backgroundOpacity);
      backdrop-filter: blur(4.5px);
      -webkit-backdrop-filter: blur(4.5px);
      margin-bottom: 20rem;
      mask-image: linear-gradient(to top, transparent, black);
    }

    &__secondContainer {
      background-color: var(--palette-contrast);
      width: 100%;
      margin-bottom: 20rem;
      padding: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: ${mobile}px) {
        padding: 2rem;
      }
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
