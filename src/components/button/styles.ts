import { css } from "styled-components";

export default css`
  border: none;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  &:focus {
  }

  &:focus-visible {
    opacity: 0.7;
    outline: 1px solid gray;
  }
`;
