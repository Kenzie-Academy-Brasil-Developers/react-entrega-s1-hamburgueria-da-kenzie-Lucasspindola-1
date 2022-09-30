import styled from "styled-components";

export const Cabecalho = styled.div`
  width: 100%;
  height: 139px;
  position: fixed;
  display: flex;
  align-items: center;

  background-color: var(--Color-primary-header);
  justify-content: center;
  flex-direction: column;
  figure {
    img {
    }
  }

  form {
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
      padding: 15px 0 15px 10px;
      font-family: inter;
      font-size: 16px;
      line-height: 19px;
      color: #e0e0e0;
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

  @media only screen and (min-width: 600px) {
    flex-direction: unset;
    justify-content: space-between;
    height: 80px;
  }
  form {
    width: 365px;
    margin-right: 5%;
  }
  figure {
    margin-left: 5%;
  }
`;
