import styled from "styled-components";

import { SkillCardStyledProps as Props } from "./SkillCard.types";

const SkillCardStyled = styled.div<Props>`
  .SkillCard {
    &__skill {
      color: var(--palette-black);
      font-size: 2rem;
      font-weight: bold;
      border-radius: 1rem;
      text-align: center;
      width: min-content;
      white-space: nowrap;
      padding: 1rem;
      background: var(--palette-white);
    }

    &__otherSkill {
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

export default SkillCardStyled;
