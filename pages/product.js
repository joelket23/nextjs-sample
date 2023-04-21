import Navbar from '../components/Navbar';
import { useEffect } from 'react';

const Product = () => {
  const initial_fetch = async () => {
    const response = await fetch(`/api/test_api`);
    const result = await response.json();
    console.log('result', result);
  };
  useEffect(() => {
    initial_fetch();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Hello World my Product </h1>
    </>
  );
};

export default Product;
