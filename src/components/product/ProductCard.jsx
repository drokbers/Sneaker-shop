import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

function ProductCard({ product }) {
  const { id, title, price, subImage1 } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items) || [];
  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleAddToCart = () => {
    const newItem = { id, title, price, quantity: 1, subImage1 };
    dispatch(addToCart(newItem));
  };

  const removeFromCartHandle = () => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const hasQuantityGreaterThanZero = cartItems.some(
      (item) => item.quantity > 0
    );
    setIsButtonActive(!hasQuantityGreaterThanZero);
    console.log(hasQuantityGreaterThanZero);

    console.log(isButtonActive);
  }, [cartItems]);

  return (
    <div className="flex flex-col md:flex-row mt-20 gap-10 justify-center w-full items-center ">
      <div id="foto" className="flex flex-col gap-3 w-96 flex-shrink-0s">
        <div className="w-96">
          <Image
            className="rounded-md"
            src={product.image}
            width={400}
            height={400}
            alt="DENME"
          />
        </div>
        <div className="flex gap-2 ">
          <Image
            src={product.subImage1}
            width={100}
            height={100}
            alt="DENME"
            className="w-full h-full rounded-md "
          />
          <Image
            src={product.subImage1}
            width={100}
            height={100}
            alt="DENME"
            className="w-full h-full rounded-md"
          />
          <Image
            src={product.subImage1}
            width={100}
            height={100}
            alt="DENME"
            className="w-full h-full rounded-md"
          />
          <Image
            src={product.subImage1}
            width={100}
            height={100}
            alt="DENME"
            className="w-full h-full rounded-md"
          />
        </div>
      </div>

      <div id="bilgi" className=" grid grid-row-3 gap-5 w-1/2 md:w-3/12">
        <h1 className=" text-primary-orange font-sans">{product.company}</h1>
        <div>
          <h1 className="text-2xl font-sans text-neutral-black font-bold">
            {product.title}
          </h1>
        </div>
        <p className="text-body ">{product.description}</p>

        <div className="flex gap-3">
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="bg-primary-paleOrange w-12 text-primary-orange flex justify-center items-center font-bold rounded-md ">
            %50
          </p>
        </div>
        <p className="text-neutral-grayishBlue line-through">$250.00</p>
        <div>
          <div className="flex gap-5   ">
            <div className=" flex items-center justify-around bg-neutral-lightGrayishBlue text-body h-12 rounded-md">
              <button onClick={removeFromCartHandle}>
                <div className="w-2">
                  <Image
                    src="/images/icon-minus.svg"
                    width={8}
                    height={8}
                    alt="DENME"
                    className=" h-full rounded-md"
                  />
                </div>
              </button>
              <p className="w-4"> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
              <button onClick={handleAddToCart}>
                <div className="w-2">
                  <Image
                    src="/images/icon-plus.svg"
                    width={8}
                    height={8}
                    alt="DENME"
                    className=" h-full rounded-md"
                  />
                </div>
              </button>
            </div>

            <div className="flex">
              <button
                className={`flex items-center justify-center text-white px-4 py-2 rounded-md w-60 h-12 ${
                  isButtonActive ? "bg-primary-orange" : "bg-gray-300"
                }`}
                onClick={handleAddToCart}
                disabled={!isButtonActive}
              >
                <Image
                  src="/images/icon-cart.svg"
                  width={30}
                  height={30}
                  alt="DENME"
                  className=" h-full rounded-md"
                />
                <span className="ml-2">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
