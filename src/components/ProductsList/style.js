import styled from "styled-components";

export const ProductsList = styled.div`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  gap: 10px;
  margin: 10px 0 10px 5%;
  /* background-color: green; */

  div {
    width: 300px;
    height: 346px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid rgba(224, 224, 224, 1);
    border-radius: 5px;
    /* margin: 10px; */

    figure {
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
    }
    h2 {
      font-family: Inter;
      font-style: Bold;
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      color: var(--Color-font-title-products);
      padding: 0 0 5px 5px;
    }

    span {
      font-family: Inter;
      font-style: Regular;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: var(--Color-font-type-products);
      padding: 0 0 5px 5px;
    }

    p {
      font-family: Inter;
      font-style: Semi Bold;
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      color: var(--Color-primary);
      padding: 0 0 5px 5px;
    }
    button {
      font-family: Inter;
      font-style: Semi Bold;
      font-weight: 600;
      width: 106px;
      height: 40px;
      border-radius: 8px;
      font-size: 14px;
      color: #ffffff;
      border: none;
      background-color: var(--Color-primary);
      margin-left: 5px;
      margin-bottom: 15px;
    }

    /* Font family: Inter
Font style: Semi Bold
Font size: 14px
Line height: 24px
Line height: 142%
Align: Left
Vertical align: Top */
  }
`;
