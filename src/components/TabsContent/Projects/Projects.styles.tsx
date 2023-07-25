import styled from "styled-components";

import { ProjectsStyledProps as Props } from "./Projects.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const ProjectsStyled = styled.div<Props>`
  border-radius: 2rem;

  @media (max-width: ${mobile}px) {
    padding: 2rem;
  }

  .Projects {
    &__motion {
      pointer-events: none;
      position: absolute;
      inset: -1px;
      border-radius: 0.4rem;
    }

    &__item {
      align-self: center;
      justify-content: center;
      flex-basis: 50%;

      @media (max-width: 1200px) {
        flex-basis: 100%;
      }
    }

    &__right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
    }

    &__left {
    }

    &__header {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 1.2rem;
    }

    &__icon {
      width: 8rem;
      height: 8rem;
      border-radius: 1.2rem;
    }

    &__title {
      font-size: 2.6rem;
      color: var(--palette-white);
      font-weight: 600;

      @media (max-width: ${mobile}px) {
        font-size: 2.2rem;
      }
    }

    &__subtitle {
      font-size: 1.6rem;
      color: var(--palette-secondary);
      font-weight: 600;

      @media (max-width: ${mobile}px) {
        font-size: 2.2rem;
      }
    }

    &__description {
      padding-top: 1.4rem;
      color: var(--palette-white);
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    &__mall {
      width: 100%;
      border-radius: 1rem;
      object-fit: cover;
      max-width: 40rem;
    }

    &__mallDescription {
      font-size: 1.5rem;
      color: var(--palette-white);
      max-width: 40rem;
    }
  }
`;

export default ProjectsStyled;
