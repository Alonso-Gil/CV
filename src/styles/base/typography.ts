import { css } from "styled-components";
import { Open_Sans, Dancing_Script } from "next/font/google";

const OpenSans = Open_Sans({
  subsets: ["latin"],
});

const DancingScript = Dancing_Script({
  subsets: ["latin"],
});

const typography = css`
  :root {
    --font-primary: ${OpenSans.style.fontFamily};
    --font-secondary: ${DancingScript.style.fontFamily};
  }

  body {
    font-family: var(--font-primary), "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
  }

  p {
    color: rgba(0, 0, 0, 0.85);
  }
`;

export default typography;
