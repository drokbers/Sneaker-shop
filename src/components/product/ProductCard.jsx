import React from "react";
import Image from "next/image";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';


function ProductCard({ product }) {
  const { id, title, price } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = { id, title, price, quantity: 1 };
    dispatch(addToCart(newItem));
  };


  return (
    <div
      className="grid grid-cols-2 place-items-center h-screen gap-1 "
    >
      <div id="foto" className="grid grid-row-2 gap-3">
        <Image
          className="rounded-md"
          src={product.image}
          width={400}
          height={400}
          alt="DENME"
        />
        <div className="grid grid-cols-4 gap-2 ">
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

      <div id="bilgi" className="grid grid-row-3 gap-5 ">
        <h1 className=" text-primary-orange font-sans">{product.company}</h1>
        <div>
          <h1 className="text-2xl font-sans text-neutral-black font-bold">
            {product.title}
          </h1>
        </div>
        <div className="pr-60 ">
        <p className="text-body ">{product.description}</p>
        </div>
          
          <div className="flex gap-3">
            <p className="text-2xl font-bold">${product.price}</p>
            <p className="bg-primary-paleOrange w-12 text-primary-orange flex justify-center items-center font-bold rounded-md ">
              %50
            </p>
          
        </div>
        <p className="text-neutral-grayishBlue line-through">$250.00</p>
        <div>
          <div className="flex gap-5   ">
            <div className=" w-27 flex justify-items-center items-center  bg-neutral-lightGrayishBlue text-body h-12  rounded-md">
              <button className="text-primary-orange">-</button>
              <p>0</p>
              <button className="text-primary-orange">+</button>
            </div>

            <button
              className="flex items-center justify-center  bg-primary-orange text-white px-4 py-2 rounded-md w-60 h-12 "
              onClick={handleAddToCart}
            >
              <Image
            src= '/images/icon-cart.svg'
            width={25}
            height={25}
            alt="DENME"
            className=" h-full rounded-md"
          />
              <span className="ml-2">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
