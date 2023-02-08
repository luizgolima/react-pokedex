import styled from "styled-components";

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.neutral.pure};
  border-radius: ${(props) => props.theme.spacing.xxxs};
  padding: 11px;
  font-size: 1em;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  color: ${(props) => props.theme.font.colors.pure};
  width: 100%;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }

  ::placeholder {
    color: ${(props) => props.theme.font.colors[1]};
  }
`;
