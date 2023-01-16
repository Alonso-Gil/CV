import styled from "styled-components";

import { SideMenuStyledProps as Props } from "./SideMenu.types";

const SideMenuStyled = styled.div<Props>`
  background-color: var(--palette-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .SideMenu {
    &__imageContainer {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      margin-top: 4rem;
      padding-top: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 0.6rem solid var(--palette-tertiary);
    }

    &__socialMediaContainer {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
    }

    &__socialMediaItem {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
      background-color: var(--palette-contrast);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &__mainContentContainer {
      width: 100%;
      padding: 2.6rem 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
    }

    &__mainContentItem {
      width: 100%;
      height: 4rem;
      border-radius: 4rem;
      background-color: #d9d9d9;
    }
  }
`;

export default SideMenuStyled;
