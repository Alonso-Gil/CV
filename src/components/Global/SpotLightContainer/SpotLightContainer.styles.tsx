import styled from "styled-components";

import { SpotLightContainerStyledProps as Props } from "./SpotLightContainer.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const SpotLightContainerStyled = styled.div<Props>`
  width: 100%;
  backdrop-filter: blur(0.1rem);
  padding: 4rem;
  border-radius: 2rem;
  max-width: 100rem;
  overflow: hidden;
  position: relative;
  background-color: var(--palette-backgroundOpacity);
  border: 0.1rem solid var(--palette-background);
  transition-property: background-color, border;
  transition-duration: 1s;

  :hover {
    background-color: var(--palette-backgroundHover);
    border: 0.1rem solid var(--palette-border);
    transition-property: background-color, border;
    transition-duration: 0.3s;
  }

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
