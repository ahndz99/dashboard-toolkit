import { css } from "styled-components";

export default css`
  .section-layout {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    .section-title {
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 16px;
    }

    .section-subtitle {
      margin-bottom: 10px;
      font-size: 14px;
    }

    .section-content {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
    }
  }

  .input-layout {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
      margin-bottom: 10px;
      font-size: 14px;
    }

    .errors {
      display: flex;
      flex-direction: column;
    }

    .error {
      color: red;
      font-size: 12px;
      margin-top: 10px;
      display: block;
    }
  }

  .text-input {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }

  .select-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .checkbox-input,
  .radio-input {
    margin-right: auto;
  }
`;
