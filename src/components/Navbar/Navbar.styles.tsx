import styled from "styled-components";

import { NavbarStyledProps as Props } from "./Navbar.types";

const NavbarStyled = styled.div<Props>`
  background-color: var(--palette-quaternary);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > p {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }

  .Navbar {
  }
`;

export default NavbarStyled;
