import styled from "styled-components";

import { HomeStyledProps as Props } from "./Home.types";
import CONSTANTS from "config/constants";

const { tablet, mobile } = CONSTANTS.BREAKPOINTS;

const HomeStyled = styled.div<Props>`
  background-color: #fff;
  display: grid;
  grid-template-columns: ${(props) =>
    props.showSideMenu ? "32rem 3fr" : "1fr"};
  grid-template-rows: 6rem 1fr;
  ${(props) =>
    props.showSideMenu
      ? 'grid-template-areas: ". ." ". main";'
      : 'grid-template-areas: "." "main";'}

  @media (max-width: ${tablet}px) {
    grid-template-areas: "main" "main";
    grid-template-columns: 1fr;
  }

  .Home {
    &__sideMenu {
      height: ${(props) => (props.showSideMenu ? "100vh" : "10rem")};
      position: fixed;
      width: 32rem;
      z-index: ${(props) => (props.showSideMenu ? 4 : 1)};

      @media (max-width: ${tablet}px) {
        width: 100%;
      }
    }

    &__header {
      width: 100%;
      height: 6rem;
      position: fixed;
      z-index: ${(props) => (props.showSideMenu ? 1 : 4)};
      padding-left: ${(props) => (props.showSideMenu ? "32rem" : 0)};
      transition: all 0.3s;

      @media (max-width: ${tablet}px) {
        padding-left: unset;
      }
    }

    &__main {
      grid-area: main;
      background-color: var(--palette-white);
      position: relative;
      padding: 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${tablet}px) {
        gap: 2rem;
        padding: 2rem;
        padding-top: 8rem;
      }
    }

    &__progress-bar {
      position: absolute;
      position: fixed;
      top: 6rem;
      left: 0;
      right: 0;
      height: 0.6rem;
      background-color: var(--palette-contrast);
      transform-origin: 0%;
      margin-left: ${(props) => (props.showSideMenu ? "32rem" : 0)};
      transition: all 0.3s;
      z-index: 2;

      @media (max-width: ${tablet}px) {
        margin-left: unset;
      }
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
