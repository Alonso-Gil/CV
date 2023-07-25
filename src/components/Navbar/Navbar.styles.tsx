import styled from "styled-components";

import { NavbarStyledProps as Props } from "./Navbar.types";

const NavbarStyled = styled.nav<Props>`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .Navbar {
    &__container {
      background: var(--palette-backgroundOpacity);
      align-items: center;
      justify-content: center;
      height: 5.2rem;
      border-radius: 1rem;
      position: relative;
      border: 0.1rem solid var(--palette-backgroundOpacity);
      transition-property: background-color, border;
      transition-duration: 0.5s;

      :hover {
        border: 0.1rem solid var(--palette-white);
        transition-property: background-color, border;
        transition-duration: 0.3s;
        background: var(--palette-background);
      }
    }

    &__list {
      display: flex;
      gap: 4rem;
      padding: 0 2rem;
      align-items: center;
      justify-content: center;
      height: 100%;

      li {
        list-style: none;
        cursor: pointer;
      }
    }

    &__icon {
      width: 2.4rem;
      height: 2.4rem;

      path {
        fill: rgb(255, 255, 255, 0.5);
        transition: fill 0.3s;
      }

      &-active {
        path {
          fill: white;
          transition: fill 0.3s;
        }
      }
    }

    &__lightContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      margin-bottom: 0.2rem;
    }

    &__light {
      width: 4rem;
      height: 4rem;
      background: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0) 0%,
        var(--palette-white) 100%
      );
      clip-path: polygon(100% 0, 80% 100%, 20% 100%, 0 0);
      bottom: 2rem;
      opacity: 0.5;
    }

    &__border {
      height: 0.4rem;
      width: 3rem;
      background-color: var(--palette-white);
      border-radius: 10rem;
    }
  }
`;

export default NavbarStyled;
