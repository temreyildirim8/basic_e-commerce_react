import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const PizzaWrapper = styled.div`
  margin: 0 7.5px;
  border-radius: 20px;
  width: 200px;
  background-color: #fff;
  margin-bottom: 30px;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 40%;
  }
`;

const PizzaHeader = styled.div`
  width: 100%;
  background-color: #aaaaaa;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
  height: 171px;
`;

const StyledImg = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
`;

const PizzaFooter = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 50%;
  background-color: #fff;
  padding: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5px;
    width: 80%;
  }
`;

const InfoWrapper = styled.div`
  @media (min-width: 321px) and (max-width: 480px) {
    height: 100px;
  }

  @media (max-width: 320px) {
    height: 120px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: #5b5b5b;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 13px;
  }
`;

const Description = styled.p`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  margin: 10px 0;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 11px;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: default;

  & > span {
    color: #f97600;
    font-family: 'Montserrat', sans-serif;
    font-size: 21px;
    font-weight: bold;
    margin-right: 5px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & > span {
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

const StyledButton = styled.button`
  padding: 7px;
  border-radius: 20px;
  background-color: ${(props) => (!props.isSelected ? '#cf0a2c' : `rgb(58, 38, 77)`)};

  color: white;
  font-size: 13px;
  font-weight: normal;

  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  margin: 10px 0;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const Pizza = ({ addToCartPizza, pizzaProduct }) => {
  let history = useHistory();

  const [isAdded, setIsAdded] = useState(false);

  const addToCartPizzaFunc = (pizza) => {
    addToCartPizza(pizza);
    setIsAdded(true);
  };

  const handleGoToDetail = (pizzaProduct) => {
    history.push('/detail', { price: pizzaProduct.price, title: pizzaProduct.title, image: pizzaProduct.image });
  };

  return (
    <PizzaWrapper>
      <PizzaHeader onClick={() => handleGoToDetail(pizzaProduct)}>
        <StyledImg src={pizzaProduct.image} alt="" />
      </PizzaHeader>
      <PizzaFooter>
        <InfoWrapper>
          <Title onClick={() => handleGoToDetail(pizzaProduct)}>{pizzaProduct.title}</Title>
          <Description onClick={() => handleGoToDetail(pizzaProduct)}>{pizzaProduct.detail}</Description>
        </InfoWrapper>
        <Price>
          <span>
            {pizzaProduct.price}
            <span style={{ marginLeft: '3px' }}>TL</span>
          </span>

          <StyledButton
            isSelected={isAdded}
            onClick={() =>
              addToCartPizzaFunc({
                title: pizzaProduct.title,
                price: pizzaProduct.price,
              })
            }
          >
            {!isAdded ? 'Sepete Ekle' : '✔ Sepete Eklendi'}
          </StyledButton>
        </Price>
      </PizzaFooter>
    </PizzaWrapper>
  );
};
export default Pizza;
