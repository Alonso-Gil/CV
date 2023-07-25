import { css } from "styled-components";

const animations = css`
  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes shine {
    0% {
      transform: rotateZ(-45deg) translateX(-150%);
    }
    100% {
      transform: rotateZ(30deg) translateX(2000%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes load {
    from {
      left: -15rem;
    }
    to {
      left: 100%;
    }
  }

  @keyframes gradient-animation {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

export default animations;
