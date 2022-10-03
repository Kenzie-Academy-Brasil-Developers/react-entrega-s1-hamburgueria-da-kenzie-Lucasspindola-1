import styled from "styled-components";

export const Cart = styled.section`
  width: 90%;
  max-width: 384px;
  background-color: var(--Color-primary-header);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .carTitle {
    width: 100%;
    min-height: 65px;
    height: 65px;
    background-color: var(--Color-primary);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 0 0 5px;
    font-family: Inter;
    font-style: Bold;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 1);
  }
  .containerCarProducts {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 158px;
    height: 158px;
    justify-content: center;

    h5 {
      font-family: Inter;
      font-style: Bold;
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      color: rgba(51, 51, 51, 1);
    }
    span {
      font-family: Inter;
      font-style: Regular;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
    }
  }
  /* Quando estiver com produtos no carrinho */
  .containerCarProductsFull {
    /* height: 400px; */
    overflow-y: scroll;
  }
  .containerCarProductsFull li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0 20px 0;
  }
  .containerCarProductsFull li div {
    display: flex;
    margin: 0 0 0 5%;
  }
  .containerCarProductsFull li img {
    max-width: 70px;
    max-height: 70px;
    border-radius: 5px;
    background-color: var(--Color-background_procuducts-car);
  }
  .containerCarProductsFull li div h5 {
    font-family: Inter;
    font-style: Bold;
    line-height: 24px;
    font-size: 18px;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
  }
  .containerCarProductsFull li div span {
    font-family: Inter;
    font-style: Regular;
    font-size: 12px;
    line-height: 16px;
    color: var(--Color-font-type-products);
  }
  .containerCarProductsFull li button {
    border: none;
    background-color: transparent;
    font-family: Inter;
    font-style: Medium;
    line-height: 15px;
    font-size: 12px;
    color: var(--Color-font-type-products);
    margin: 0 5% 0 0;
  }
  .containerInformationsProductCar {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .containerTotalPrice {
    border-top: 1px solid #e0e0e0;
    width: 90%;
    margin: 5% 5% 5% 5%;
    display: flex;
    flex-direction: column;
  }
  .informationsPriceSome {
    display: flex;
    justify-content: space-between;
    margin: 5% 0 5% 0;
  }
  .btnRemoveProduct {
    border: none;
    background-color: var(--Color-background_procuducts-car);
    height: 60px;
    border-radius: 8px;
    font-family: inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: #828282;
  }
  .total {
    font-family: inter;
    font-style: Semi bold;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: #333333;
  }

  .value {
    font-family: inter;
    font-style: semi bold;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: #828282;
  }

  @media only screen and (min-width: 600px) {
    min-width: 200px;
    min-height: 370px;
    height: 470px;
    margin: 10px 5% 0 0%;
  }
`;
