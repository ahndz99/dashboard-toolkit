import { css } from "styled-components";

export default css`
  border: 1px solid black;
  border-radius: 10px;

  .header {
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid;
    justify-content: space-between;

    .left-container {
      display: flex;
      align-items: center;
      gap: 10px;

      .left-node {
      }
    }

    .right-node {
    }
  }

  .text-container {
    gap: 10px;
    display: grid;
  }

  .title {
  }

  .subtitle {
  }

  .body {
    padding: 10px;
  }

  .footer {
    border-top: 1px solid;
    padding: 10px;
  }
`;
