import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.spacing.xxxs};
  color: ${(props) => props.theme.font.colors.pure};
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props?.theme?.colors?.light?.pure};
    background-color: #d50574;
  }

  &:active {
    scale: 0.95;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
