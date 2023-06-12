import styled from "styled-components";

import { TextsSplideStyledProps as Props } from "./TextsSplide.types";

const TextsSplideStyled = styled.div<Props>`
  display: flex;
  align-items: center;

  .TextsSplide {
    &__splide {
      padding-top: 2rem;
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
    }
  }
`;

export default TextsSplideStyled;
