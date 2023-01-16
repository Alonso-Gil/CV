import styled from "styled-components";

import { HomeStyledProps as Props } from "./Home.types";

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

  .Home {
    &__sideMenu {
      height: 100vh;
      position: fixed;
      width: 32rem;
      z-index: 2;
    }

    &__header {
      width: 100%;
      height: 6rem;
      position: fixed;
      z-index: 1;
      padding-left: ${(props) => (props.showSideMenu ? "32rem" : 0)};
      transition: all 0.3s;
    }

    &__main {
      grid-area: main;
      background-color: #fff;
      position: relative;
      padding: 4rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 30rem 20rem 30rem 20rem;
      gap: 4rem;
      grid-template-areas:
        "first first"
        "second third"
        "fourth fourth"
        "fifth sixth";
    }

    &__progress-bar {
      position: absolute;
      position: fixed;
      top: 6rem;
      left: 0;
      right: 0;
      height: 1.2rem;
      background-color: var(--palette-contrast);
      transform-origin: 0%;
      margin-left: ${(props) => (props.showSideMenu ? "32rem" : 0)};
      transition: all 0.3s;
    }

    &__first {
      grid-area: first;
      background-color: var(--palette-primary);
      border-radius: 2rem;
    }

    &__second {
      grid-area: second;
      background-color: var(--palette-primary);
      border-radius: 2rem;
    }

    &__third {
      grid-area: third;
      background-color: var(--palette-primary);
      border-radius: 2rem;
    }

    &__fourth {
      grid-area: fourth;
      background-color: var(--palette-primary);
      border-radius: 2rem;
    }

    &__fifth {
      grid-area: fifth;
      background-color: var(--palette-primary);
      border-radius: 2rem;
    }

    &__sixth {
      grid-area: sixth;
      background-color: var(--palette-primary);
      border-radius: 2rem;
    }

    &__footer {
    }
  }
`;

export default HomeStyled;
