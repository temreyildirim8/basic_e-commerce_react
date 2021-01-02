import React from 'react';
import styled from 'styled-components';

import hero from '../assets/img/hero.png';

export const StyledHero = styled.div`
  height: 382px;
  background-color: #cf0a2c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = () => {
  return (
    <section>
      <StyledHero>
        <img src={hero} alt="" />
      </StyledHero>
    </section>
  );
};
export default Banner;
