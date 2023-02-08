import styled from "styled-components";
import { FlexBox } from "../Flexbox";

export const HeaderContainer = styled(FlexBox)`
  margin: 0 0 ${(props) => props.theme.spacing.sm};

  h2 {
    margin: 0;
  }

  .pokemon-logo {
    cursor: pointer;
    transition: all ${(props) => props.theme.transitions.time} ease;

    &:hover {
      scale: 0.75;
    }

    @media (max-width: 576px) {
      display: none;
    }

    @media (min-width: 577px) and (max-width: 768px) {
      scale: 0.5;
    }

    @media (min-width: 769px) {
      scale: 0.7;
    }
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[1]};
  cursor: pointer;
  border-radius: 6px;
  padding: ${(props) => props.theme.spacing.xs};
  transition: all ${(props) => props.theme.transitions.time} ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.pure};
    box-shadow: 0 0 0 1px ${(props) => props?.theme?.colors?.light?.pure};
  }

  &:active {
    scale: 0.9;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
  }
`;
