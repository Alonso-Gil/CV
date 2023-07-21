import styled from "styled-components";

import { ProjectsStyledProps as Props } from "./Projects.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const ProjectsStyled = styled.div<Props>`
  width: 100%;
  background-color: var(--palette-primary);
  padding: 4rem;
  border-radius: 2rem;
  max-width: 100rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media (max-width: ${mobile}px) {
    padding: 2rem;
  }

  .Projects {
    &__container {
      display: flex;
      gap: 6rem;
      padding-bottom: 2.6rem;

      @media (max-width: 1200px) {
        flex-wrap: wrap;
        gap: 4rem;
      }

      &-item {
        align-self: center;
        justify-content: center;
        flex-basis: 50%;

        @media (max-width: 1200px) {
          flex-basis: 100%;
        }
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
      color: var(--palette-quaternary);
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
      color: var(--palette-tertiary);
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
      color: var(--palette-tertiary);
      max-width: 40rem;
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
      }

      .ant-collapse-content-box {
        background-color: var(--palette-primary);
      }
    }
  }
`;

export default ProjectsStyled;
