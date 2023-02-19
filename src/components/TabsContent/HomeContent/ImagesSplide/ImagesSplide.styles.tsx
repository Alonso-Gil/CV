import styled from "styled-components";

import { ImagesSplideStyledProps as Props } from "./ImagesSplide.types";

const ImagesSplideStyled = styled.div<Props>`
  .ImagesSplide {
    &__image {
      height: 10rem;
      width: 10rem;
    }
  }
`;

export default ImagesSplideStyled;
