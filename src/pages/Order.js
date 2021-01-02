import React from 'react';
import styled from 'styled-components';

import OrderPizza from '../components/OrderPizza';
import Banner from '../components/Banner';
import { AddedPizzas, Orders } from '../styled/StyledElements';

const Total = styled.div`
  border-top: 1px solid rgb(80, 80, 97);
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  & > span {
    color: #000;
    font-weight: bold;
  }
`;

const Order = ({ pizzas, deleteToPizza }) => {
  let total = 0;

  return (
    <section style={{ minHeight: '500px' }}>
      <Banner />
      <AddedPizzas>
        <p>Sepet</p>
        <Orders>
          {pizzas.map((value, index) => {
            total = total + value.price;

            return <OrderPizza key={index} value={value} deleteToPizza={deleteToPizza} />;
          })}
          <hr />
          <Total>
            <span>Toplam</span>
            <span>
              {total}
              TL
            </span>
          </Total>
        </Orders>
      </AddedPizzas>
    </section>
  );
};
export default Order;
