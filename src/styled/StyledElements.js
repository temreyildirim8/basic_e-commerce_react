import styled from 'styled-components';

export const HeaderOutsideWrapper = styled.header`
  height: 100px;
  background-color: #000;
`;

export const HeaderInsideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 960px;
  margin: 0 auto;

  @media (min-width: 481px) and (max-width: 1024px) {
    width: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: auto;
    padding: 0 10px;
  }
`;

export const StyledImg = styled.img`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 150px;
  }
`;

export const Pizzas = styled.div`
  width: 960px;
  margin: 0 auto;

  @media (min-width: 481px) and (max-width: 1024px) {
    width: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 0 5%;
  }
`;

export const AddedPizzas = styled.div`
  width: 960px;
  margin: 0 auto;

  @media (min-width: 481px) and (max-width: 1024px) {
    width: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    margin: 0 5%;
  }
`;

export const Orders = styled.div`
  width: 960px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100px;

  @media (min-width: 481px) and (max-width: 1024px) {
    flex-wrap: wrap;
    width: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    width: auto;
  }
`;

export const StyledFooter = styled.footer`
  background: #000;
  height: 340px;
  margin-top: 50px;

  @media (min-width: 481px) and (max-width: 1024px) {
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: auto;
  }
`;

export const FooterWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;

  & > ul {
    color: white;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    margin-top: 50px;
    margin-right: 70px;
  }

  & > ul:last-child {
    margin-right: 0;
  }

  & > ul li {
    margin: 5px 0;
    cursor: pointer;
  }

  & > ul li:first-child {
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    width: auto;
    flex-wrap: wrap;
  }
`;
