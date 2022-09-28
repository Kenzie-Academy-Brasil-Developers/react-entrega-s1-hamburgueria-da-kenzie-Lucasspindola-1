import styled from "styled-components";

export const Cabecalho = styled.div`
  width: 100%;
  height: 139px;
  display: flex;
  align-items: center;

  background-color: var(--Color-primary-header);
  justify-content: center;
  flex-direction: column;
  figure {
    img {
    }
  }

  div {
    display: flex;
    align-items: center;
    background-color: var(--Color-background-input);
    width: 90%;
    height: 60px;
    padding: 5px;
    border-radius: 8px;
    input {
      width: 65%;
      border: none;
    }
    button {
      width: 35%;
      height: 40px;
      background-color: var(--Color-primary);
      border-radius: 8px;
      font-size: 14px;
      color: var(--Color-font-btn);
      border: none;
    }
  }
`;
