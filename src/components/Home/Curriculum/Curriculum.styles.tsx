import styled from "styled-components";

import { CurriculumStyledProps as Props } from "./Curriculum.types";
import CONSTANTS from "config/constants";

const { desktop, tablet, mobile } = CONSTANTS.BREAKPOINTS;

const CurriculumStyled = styled.div<Props>`
  transition-property: background-color, border;
  transition-duration: 1s;
  overflow: hidden;
  margin-bottom: 20rem;

  :hover {
    background-color: rgb(197, 68, 53, 0.7);
    transition-property: background-color, border;
    transition-duration: 0.3s;
  }

  @media (max-width: ${desktop + 100}px) {
    margin: 0 4rem;
  }

  @media (max-width: ${tablet}px) {
    margin: 0 2rem;
  }

  @media (max-width: ${mobile}px) {
    margin: 0;
  }

  .Curriculum {
    &__card {
      width: 100%;
      height: 160rem;
      background-color: var(--palette-backgroundOpacity);
      backdrop-filter: blur(4.5px);
      -webkit-backdrop-filter: blur(4.5px);
      padding: 0 4rem;
      padding-top: 14rem;
      /* display: grid;
      grid-template-columns: 1fr 1fr; */
    }

    &__title {
      font-size: 4rem;
      color: var(--palette-white);
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

    &__bottomCard {
      width: 100%;
      height: 20rem;
      background-color: var(--palette-backgroundOpacity);
      backdrop-filter: blur(4.5px);
      -webkit-backdrop-filter: blur(4.5px);
      margin-bottom: 20rem;
      mask-image: linear-gradient(to top, transparent, black);
    }
  }
`;

export default CurriculumStyled;
