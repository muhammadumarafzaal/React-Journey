import React from 'react';
import { useCart } from '../context/CartContext';

/**
 * Higher Order Component to provide Cart functionality to any component.
 */
const withCart = (WrappedComponent) => {
  return (props) => {
    const cart = useCart();
    return <WrappedComponent {...props} cart={cart} />;
  };
};

export default withCart;
