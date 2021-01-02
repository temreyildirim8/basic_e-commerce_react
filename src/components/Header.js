import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';
import OrderBox from './OrderBox';
import { HeaderOutsideWrapper, HeaderInsideWrapper, StyledImg } from '../styled/StyledElements';

const Header = ({ totalPrice }) => {
  return (
    <HeaderOutsideWrapper>
      <HeaderInsideWrapper>
        <Link to="/">
          <StyledImg src={logo} alt="" />
        </Link>
        <OrderBox totalPrice={totalPrice} />
      </HeaderInsideWrapper>
    </HeaderOutsideWrapper>
  );
};
export default Header;
