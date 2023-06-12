import styled from "styled-components";

import { CertificatesStyledProps as Props } from "./Certificates.types";
import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const CertificatesStyled = styled.div<Props>`
  background-color: var(--palette-primary);
  border-radius: 2rem;
  width: 100%;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: relative;

  .Certificates {
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
      margin-bottom: 1.4rem;

      @media (max-width: ${mobile}px) {
        font-size: 2.2rem;
      }
    }

    &__sub-title {
      font-size: 2rem;
      color: var(--palette-quaternary);
      padding-bottom: 0.2rem;
    }

    &__date {
      font-size: 2rem;
      padding-bottom: 0.8rem;
    }

    &__description {
      letter-spacing: 0.1rem;
      line-height: 2rem;
      color: var(--palette-tertiary);
      font-size: 1.6rem;
    }

    &__space {
      height: 2.4rem;
    }
  }
`;

export default CertificatesStyled;
