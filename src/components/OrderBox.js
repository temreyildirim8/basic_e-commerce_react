import React from 'react';
import styled from 'styled-components';

import sepet from '../assets/img/sepet.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.button`
  padding: 10px 20px;
  margin-right: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: transparent;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  border-radius: 25px;

  & > span {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #fff;
    margin-left: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;
  }
`;

const OrderBox = ({ totalPrice }) => {
  return (
    <Link to="/order">
      <Wrapper href="/order">
        <img src={sepet} alt="" />
        <span>{!totalPrice ? '' : `${totalPrice} TL`}</span>
      </Wrapper>
    </Link>
  );
};
export default OrderBox;
