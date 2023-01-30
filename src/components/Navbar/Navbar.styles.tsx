import styled from "styled-components";

import { NavbarStyledProps as Props } from "./Navbar.types";

import CONSTANTS from "config/constants";

const { mobile } = CONSTANTS.BREAKPOINTS;

const NavbarStyled = styled.div<Props>`
  background-color: var(--palette-quaternary);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > p {
    color: var(--palette-white);
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 0.5s;
    transition-property: color;
    transition: all 0.3s;

    :focus,
    :hover {
      color: var(--palette-primary);
    }

    :focus:after,
    :hover:after {
      width: 100%;
      left: 0%;
    }

    :after {
      content: "";
      pointer-events: none;
      bottom: 0;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 0.4rem;
      background-color: var(--palette-primary);
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 0.5s;
      transition-property: width, left;
    }

    @media (max-width: ${mobile}px) {
      font-size: 1.6rem;
    }
  }

  .Navbar {
    &--active {
      color: var(--palette-contrast);

      :after {
        content: "";
        pointer-events: none;
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 0.4rem;
        background-color: var(--palette-primary);
      }

      :hover {
        color: var(--palette-contrast);
      }
    }
  }
`;

export default NavbarStyled;
