import styled from "styled-components";

import { SpotLightContainerStyledProps as Props } from "./SpotLightContainer.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const SpotLightContainerStyled = styled.div<Props>`
  width: 100%;
  background-color: var(--palette-primary);
  padding: 4rem;
  border-radius: 2rem;
  max-width: 100rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: relative;

  @media (max-width: ${mobile}px) {
    padding: 2rem;
  }

  .SpotLightContainer {
    &__motion {
      pointer-events: none;
      position: absolute;
      inset: -1px;
      border-radius: 0.4rem;
    }

    &__container {
      display: flex;
      gap: 6rem;
      padding-bottom: 2.6rem;
      position: relative;

      @media (max-width: 1200px) {
        flex-wrap: wrap;
        gap: 4rem;
      }
    }

    &__accordion {
      border: unset;
      background-color: unset;
    }

    &__panel {
      border: unset;

      .ant-collapse-header {
        display: flex;
        align-items: center;
      }

      .ant-collapse-header-text {
        color: var(--palette-tertiary);
        font-size: 1.6rem;
        font-weight: 500;
      }

      .ant-collapse-content {
        border: unset;
        background-color: transparent;
        position: relative;
      }
    }
  }
`;

export default SpotLightContainerStyled;
