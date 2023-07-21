import styled from "styled-components";

import { ProjectDkStyledProps as Props } from "./ProjectDk.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const ProjectDkStyled = styled.div<Props>`
  .ProjectDk {
    &__titleContainer {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 0.6rem;
    }

    &__line {
      background-color: var(--palette-quaternary);
      width: 100%;
      height: 0.4rem;
    }

    &__title {
      font-size: 2.2rem;
      color: var(--palette-quaternary);
      font-weight: 600;
      white-space: nowrap;

      @media (max-width: ${mobile}px) {
        font-size: 1.8rem;
      }
    }

    &__dateContainer {
      display: flex;
      gap: 1rem;
      align-items: center;
      padding-bottom: 2rem;
    }

    &__date {
      font-size: 1.6rem;
      color: var(--palette-secondary);
      font-weight: 600;
      white-space: nowrap;

      @media (max-width: ${mobile}px) {
        font-size: 1.4rem;
      }
    }

    &__icon {
      width: 2rem;
      height: 2rem;
    }

    &__descriptionContainer {
      display: flex;
      gap: 4rem;
      flex-direction: row;

      @media (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__descriptionTitle {
      font-size: 2rem;
      color: var(--palette-quaternary);

      @media (max-width: ${mobile}px) {
        font-size: 1.6rem;
      }
    }
  }
`;

export default ProjectDkStyled;
