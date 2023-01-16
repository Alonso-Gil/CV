import { css } from "styled-components";

const base = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; //16px default to 10px
  }

  body {
    box-sizing: border-box;
    background-color: var(--palette-gray-s0-l98);
    max-width: 100%;
    margin-top: env(safe-area-inset-top);
    margin-bottom: env(safe-area-inset-bottom);
    margin-left: env(safe-area-inset-left);
    margin-right: env(safe-area-inset-right);
  }

  h2 {
    color: var(--palette-blue-s51-l16);
  }

  p {
    color: var(--palette-blue-s51-l16);
    font-size: 1.6rem;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    z-index: 1;

    &::-ms-expand {
      display: none;
    }
  }
`;

export default base;
