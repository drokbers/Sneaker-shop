import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Image from "next/image";

import { clearCart } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();


  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex absolute right-5 justify-end w-75 h-60 rounded-lg shadow-md p-4  ">
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col justify-between ">
          <div
            id="cart title"
            className="font-sans  text-neutral-black font-bold border-b-2"
          >
            <h1>Cart</h1>
            
          </div>

          <div id='urun bilgi'className=" justify-start">
          {cartItems.map((item) => (
              <div key={item.id} className="flex gap-2 ">
                <Image
                  className="rounded-md justify-start "
                  src={item.subImage1}
                  width={50}
                  height={50}
                  alt="DENME"
                  id="foto"
                />
                <div className="">
                  <h3>{item.title}</h3>
                  <p>
                    ${item.price} x {item.quantity} {totalAmount.toFixed(2)}
                  </p>
                </div>
                <button onClick={handleClearCart}>
                <Image
                  className="rounded-md justify-start "
                  src={'/images/icon-delete.svg'}
                  width={15}
                  height={15}
                  alt="DENME"
                  id="foto"
                />
                </button>
              </div>
            ))}

          </div>
          <div> 
          <button className="flex items-center  justify-center bg-primary-orange text-white px-4 py-2 rounded-md w-60 h-12">
              <p>Checkout</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;