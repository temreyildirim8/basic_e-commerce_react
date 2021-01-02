import React from 'react';
import styled from 'styled-components';

import Pizza from './Pizza';
import { Pizzas } from '../styled/StyledElements';
import { pizzas } from '../store/dummy';

const Paragraph = styled.p`
  margin: 40px 0;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: rgb(80, 80, 97);
  margin-left: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 25px 3%;
  }
`;

const PizzaCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Products = ({ addToCart }) => {
  return (
    <section>
      <Pizzas>
        <Paragraph>Pizzalar</Paragraph>
        <PizzaCardWrapper>
          {pizzas.map((value, index) => {
            return <Pizza key={index} addToCartPizza={addToCart} pizzaProduct={value} />;
          })}
        </PizzaCardWrapper>
      </Pizzas>
    </section>
  );
};
export default Products;
