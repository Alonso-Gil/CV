import styled from "styled-components";

import { ImagesSplideStyledProps as Props } from "./ImagesSplide.types";

const ImagesSplideStyled = styled.div<Props>`
  display: flex;
  align-items: center;

  .ImagesSplide {
    &__image {
      height: 10rem;
      width: 10rem;
    }
  }
`;

export default ImagesSplideStyled;
