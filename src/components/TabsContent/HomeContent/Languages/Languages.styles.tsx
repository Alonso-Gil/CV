import styled from "styled-components";

import { LanguagesStyledProps as Props } from "./Languages.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const LanguagesStyled = styled.div<Props>`
  background-color: var(--palette-primary);
  border-radius: 2rem;
  width: 100%;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: relative;

  .Languages {
    &__personal-icon-container {
      padding: 1.2rem;
      position: absolute;
      top: -2rem;
      right: -2rem;
      background-color: var(--palette-quaternary);
      border-radius: 20rem;
      transform: rotate(20deg);
    }

    &__personal-icon {
      width: 3.6rem;
      height: 3.6rem;

      svg path {
        fill: var(--palette-primary);
      }
    }

    &__title {
      font-size: 2.6rem;
      color: var(--palette-quaternary);
      border-bottom: 0.3rem solid var(--palette-quaternary);
      width: min-content;
      white-space: nowrap;
      font-weight: 600;

      @media (max-width: ${mobile}px) {
        font-size: 2.2rem;
      }
    }

    &__container {
      margin-top: 1rem;
      margin-bottom: 2.8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    &__item {
      width: 30rem;
      border-bottom: 0.1rem solid var(--palette-secondary);
      padding-bottom: 0.8rem;

      @media (max-width: ${mobile}px) {
        width: auto;
      }
    }

    &__flag-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__sub-title {
      font-size: 2rem;
      color: var(--palette-quaternary);
      font-weight: 600;
    }

    &__description {
      padding-top: 0.4rem;
      color: var(--palette-tertiary);
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
`;

export default LanguagesStyled;
