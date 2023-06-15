import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { removeFromCart } from '../../store/cartSlice';




const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartIsOpen = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  const handleRemoveFromCart = itemId => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        { cartIsOpen && cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))}
        <button onClick={handleClearCart}>Clear Cart</button>
      </>
    )}
    </div>
    
  );
};

export default Cart;