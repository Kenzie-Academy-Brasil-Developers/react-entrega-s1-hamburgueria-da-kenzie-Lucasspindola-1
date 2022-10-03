import styled from "styled-components";

export const ProductsList = styled.ul`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  gap: 10px;
  margin: 10px 0 10px 5%;
  /* background-color: green; */
  .searchResults {
    display: none;
  }
  .NobtnMobile {
    display: none;
  }

  li {
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

      img {
        max-width: 100%;
        width: 170px;
        height: 170px;
      }
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
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;

    .NobtnMobile {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .searchResults {
      display: flex;

      width: 100%;
      margin: 0px 5% 10px 0;
      align-items: center;
      justify-content: space-between;
      font-family: inter;
      font-style: bold;
      font-size: 24px;
      line-height: 34px;
      font-weight: 700;
    }

    .clearSearch {
      width: 170px;
      height: 40px;
      background-color: var(--Color-primary);
      border: none;
      border-radius: 8px;
      font-family: inter;
      font-style: bold;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
    }
    .searchResultsDivision {
      display: flex;
    }
    .searchResultsDivision h5 {
      color: #828282;
      font-size: 20px;
      line-height: 34px;
      font-weight: 700;
    }

    .searchResultsDivision span {
      font-size: 22px;
    }

    li {
      width: 40%;
      max-width: 300px;
      img {
        max-width: 100%;
        width: 170px;
        height: 170px;
      }
      button {
        width: 80%;
      }
    }

    @media only screen and (min-width: 780px) {
      li button {
        width: 106px;
      }
      li {
        width: 30%;
        max-width: 300px;
        img {
          max-width: 100%;
          width: 170px;
          height: 170px;
        }
      }
    }
  }
`;
