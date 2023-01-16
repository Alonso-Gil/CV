import styled from "styled-components";

import { SideMenuMotionStyledProps as Props } from "./SideMenuMotion.types";

const SideMenuMotionStyled = styled.div<Props>`
  .SideMenuMotion {
    &__container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background: var(--palette-secondary);
    }

    &__button {
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: absolute;
      top: 18px;
      left: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
    }
  }
`;

export default SideMenuMotionStyled;
