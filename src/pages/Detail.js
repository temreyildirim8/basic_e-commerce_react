import React from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 480px) {
    margin 20px 0 -40px;
    width: 100%;
  }
`;

const PizzaHeader = styled.div`
  margin: 40px 0 10px;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const StyledImg = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 50%;
  }
`;

const Detail = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <PizzaHeader>
        <StyledImg src={location.state.image} alt="" />
        <h2> {location.state.title} </h2>
        <h2> {`${location.state.price} TL`} </h2>
      </PizzaHeader>
    </Wrapper>
  );
};
export default Detail;
