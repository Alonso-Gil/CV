import styled from "styled-components";

import { HomeContentStyledProps as Props } from "./HomeContent.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const HomeContentStyled = styled.div<Props>`
  z-index: 1;

  .HomeContent {
    &__skillsContainer {
      padding: 4rem;
      border-radius: 2rem;
      max-width: 100rem;
      display: flex;
      flex-direction: column;
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
    }

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-items: center;
    }

    &__title {
      font-size: 2.6rem;
      color: var(--palette-white);
      border-bottom: 0.3rem solid var(--palette-white);
      width: min-content;
      white-space: nowrap;
      font-weight: 600;

      @media (max-width: ${mobile}px) {
        font-size: 2.2rem;
      }
    }

    &__sub-title {
      padding-top: 2rem;
      font-size: 2.6rem;
      color: var(--palette-white);
      border-bottom: 0.3rem solid var(--palette-white);
      width: min-content;
      white-space: nowrap;
      font-weight: 600;
    }

    &__description {
      padding-top: 1.4rem;
      color: var(--palette-tertiary);
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    &__button {
      background-image: var(--palette-gradient);
      cursor: pointer;
      border: unset;
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 50%;
      transition: all 0.3s;

      svg path {
        fill: var(--palette-background);
      }

      :hover {
        background-color: var(--palette-quaternary);
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 1rem 2rem var(--palette-black-s0-l10-a50);

        svg path {
          fill: var(--palette-white);
        }
      }

      :active {
        transform: translateY(-0.1rem);
      }
    }

    &__brush {
      width: 3rem;
      height: 3rem;
    }

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__splide {
      width: 100%;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }

    &__content-static {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &__itemsSkillsContainer {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    &__two-blocks {
      padding-top: 4rem;
      display: flex;
      gap: 4rem;
      max-width: 100rem;
      margin: 0 1rem;

      @media (max-width: 1040px) {
        flex-direction: column;
      }
    }
  }
`;

export default HomeContentStyled;
