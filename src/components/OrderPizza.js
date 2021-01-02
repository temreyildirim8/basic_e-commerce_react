import React from 'react';
import styled from 'styled-components';

import trash from '../assets/img/delete.png';

const StyledPizza = styled.div`
  border-radius: 20px;
  border: 1px solid rgb(80, 80, 97);
  margin: 10px 0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;

  & > button {
    position: absolute;
    right: 20px;
    cursor: pointer;
    border: none;
  }

  & > span {
    margin-left: 10px;
    color: #f97600;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  & > span:first-child {
    font-size: 18px;
    font-weight: bold;
    padding-right: 10px;
    border-right: 1px solid rgb(80, 80, 97);
    color: rgb(80, 80, 97);
  }
`;

export const StyledImg = styled.img`
  height: 20px;
`;

const OrderPizza = ({ value, deleteToPizza }) => {
  const onDeleteClick = (title) => {
    deleteToPizza(title);
  };
  return (
    <StyledPizza>
      <span>{value.title}</span>
      <span>{value.price} TL</span>
      <button onClick={() => onDeleteClick(value.title)}>
        <StyledImg src={trash} alt="" />
      </button>
    </StyledPizza>
  );
};
export default OrderPizza;
