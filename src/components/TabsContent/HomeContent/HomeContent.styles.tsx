import styled from "styled-components";

import { HomeContentStyledProps as Props } from "./HomeContent.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const HomeContentStyled = styled.div<Props>`
  .HomeContent {
    &__skillsContainer {
      background-color: var(--palette-primary);
      padding: 4rem;
      border-radius: 2rem;
      max-width: 100rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
      display: flex;
      flex-direction: column;

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
      color: var(--palette-quaternary);
      border-bottom: 0.3rem solid var(--palette-quaternary);
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
      color: var(--palette-quaternary);
      border-bottom: 0.3rem solid var(--palette-quaternary);
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
      background-color: var(--palette-primary);
      color: var(--palette-quaternary);
      font-weight: bold;
      font-size: 1.6rem;
      cursor: pointer;
      border: unset;
      padding: 0.8rem;
      border-radius: 50%;
      transition: all 0.3s;

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

    &__skills {
      color: var(--palette-white);
      font-size: 2rem;
      font-weight: bold;
      background-color: var(--palette-contrast);
      border-radius: 1rem;
      text-align: center;
      width: min-content;
      white-space: nowrap;
      padding: 1rem;

      &-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }
    }

    &__other-skills {
      color: var(--palette-white);
      font-size: 2rem;
      font-weight: bold;
      background-color: var(--palette-quaternary);
      border-radius: 1rem;
      text-align: center;
      width: min-content;
      white-space: nowrap;
      padding: 1rem;

      &-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
    }

    &__information {
      padding-top: 4rem;
      display: flex;
      gap: 4rem;
      max-width: 100rem;

      @media (max-width: 1040px) {
        flex-direction: column;
      }

      &__profile {
        background-color: var(--palette-primary);
        border-radius: 2rem;
        width: 100%;
        padding: 2rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
        position: relative;
      }
    }

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
  }
`;

export default HomeContentStyled;
