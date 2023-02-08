import styled from "styled-components";
import { FlexBox } from "../Flexbox";

export const HeaderContainer = styled(FlexBox)`
  margin: 0 0 ${(props) => props.theme.spacing.sm};

  h2 {
    margin: 0;
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
    scale: 0.95;
  }
`;
