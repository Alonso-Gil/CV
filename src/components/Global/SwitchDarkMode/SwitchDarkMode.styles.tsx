import styled from "styled-components";

import { SwitchDarkModeStyledProps as Props } from "./SwitchDarkMode.types";

const SwitchDarkModeStyled = styled.div<Props>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;

  .SwitchDarkMode {
    &__container {
      height: 4rem;
      width: 8rem;
      border-radius: 2.5rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.5rem;
      cursor: pointer;
      transition: all 0.3s;
    }

    &__handle {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      display: grid;
      align-items: center;
      justify-items: center;
      background-color: #fff;
      overflow: hidden;
    }

    &__sunIcon {
      width: 2.6rem;
      height: 2.6rem;
    }

    &__moonIcon {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default SwitchDarkModeStyled;
