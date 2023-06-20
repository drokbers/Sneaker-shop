import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Image from "next/image";

import { clearCart } from "../../store/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items) || [];
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex absolute right-5 z-10 justify-end w-[400px] h-60 rounded-lg bg-white shadow-md p-4  ">
      {cartItems.length === 0 ? (
        <div className="flex justify-center w-full items-center">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col justify-between ">
          <div
            id="cart title"
            className="font-sans  text-neutral-black font-bold border-b-2"
          >
            <h1>Cart</h1>
          </div>

          <div id="urun bilgi" className=" justify-start">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-2 ">
                <Image
                  className="rounded-md justify-start "
                  src={item.subImages[0]}
                  width={50}
                  height={50}
                  alt="product-sub-image"
                  id="foto"
                />
                {console.log(item.subImages[0])}
                <div className="">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>
                    ${item.price} x {item.quantity} = {totalAmount.toFixed(2)}
                  </p>
                
                </div>
                <button onClick={clearCartHandler}>
                  <Image
                    className="rounded-md justify-start "
                    src={"/images/icon-delete.svg"}
                    width={15}
                    height={15}
                    alt="icon-delete"
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
