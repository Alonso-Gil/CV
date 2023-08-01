import styled from "styled-components";

import { PersonalInformationStyledProps as Props } from "./PersonalInformation.types";
import CONSTANTS from "config/constants";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;

const PersonalInformationStyled = styled.div<Props>`
  max-width: 100rem;
  display: flex;
  gap: 8rem;

  @media (max-width: ${desktop}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14rem;
  }

  .PersonalInformation {
    &__imageContainer {
      width: 100%;
      max-width: 40rem;
      margin: -10rem 0;
      box-shadow: 0.1rem 0.1rem 7.2rem 0px rgba(0, 0, 0, 0.75);
      border-radius: 1rem;
      overflow: hidden;
      aspect-ratio: 2 / 3;
    }

    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &__textContainer {
      flex-basis: 50%;
    }

    &__title {
      font-size: 4rem;
      color: var(--palette-white);
      width: min-content;
      white-space: nowrap;
      font-weight: 600;
    }

    &__description {
      padding-top: 1.4rem;
      color: var(--palette-white);
      font-size: 2.4rem;
      line-height: 3.6rem;

      @media (max-width: ${mobile}px) {
        font-size: 2rem;
      }
    }
  }
`;

export default PersonalInformationStyled;
