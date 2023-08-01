import styled from "styled-components";

import { PresentationCardStyledProps as Props } from "./PresentationCard.types";
import CONSTANTS from "config/constants";

const { desktop, tablet, mobile } = CONSTANTS.BREAKPOINTS;

const PresentationCardStyled = styled.div<Props>`
  margin-bottom: 24rem;
  padding: 2.2rem;
  border-radius: 2rem;

  .PresentationCard {
    &__name {
      font-family: var(--font-secondary);
      font-size: 9rem;
      text-align: center;
      color: var(--palette-black);
      font-weight: 600;

      @media (max-width: ${tablet}px) {
        font-size: 8rem;
      }

      @media (max-width: ${mobile}px) {
        font-size: 7rem;
      }
    }

    &__rol {
      font-family: var(--font-primary);
      font-size: 2.4rem;
      color: var(--palette-black);
      font-weight: 600;
      text-align: center;

      @media (max-width: ${tablet}px) {
        font-size: 2.2rem;
      }

      @media (max-width: ${mobile}px) {
        font-size: 2rem;
      }
    }

    &__buttonsContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding-top: 2rem;
    }

    &__button {
      all: unset;
      background-color: var(--palette-backgroundOpacity);
      padding: 1rem 2rem;
      border-radius: 10rem;
      color: var(--palette-white);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      border: 0.1rem solid var(--palette-backgroundOpacity);
      transition-property: background-color, border;
      transition-duration: 0.5s;
      font-weight: 600;
      gap: 1rem;
      cursor: pointer;

      :hover {
        border: 0.1rem solid var(--palette-white);
        transition-property: background-color, border;
        transition-duration: 0.3s;
        background: var(--palette-background);
      }
    }

    &__icon {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export default PresentationCardStyled;
