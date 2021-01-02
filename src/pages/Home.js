import React from 'react';
import Products from '../components/Products';

const Home = ({ handleAddPizza }) => {
  return (
    <div>
      <Products addToCart={handleAddPizza} />
    </div>
  );
};
export default Home;
