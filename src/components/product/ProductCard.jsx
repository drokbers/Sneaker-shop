import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import ProductSlide from "./ProductSlide";

const useCartItems = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];
  return cartItems;
};

function ProductCard({ product }) {
  const { id, title, price, subImages } = product;
  const dispatch = useDispatch();

  const cartItems = useCartItems();

  const [isButtonActive, setIsButtonActive] = useState(true);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [isCurrentImage, setIsCurrentImage] = useState(product.image);

  const AddToCartHandler = () => {
    const newItem = { id, title, price, quantity: 1, subImages };
    dispatch(addToCart(newItem));
  };

  const removeFromCartHandle = () => {
    dispatch(removeFromCart(id));
  };

  const toggleSlider = () => {
    console.log(isSliderActive);
    setIsSliderActive((state) => !state);
  };

  const bigPictureHandler = (image) => {
    setIsCurrentImage(image);
  };
  const memoizedCartItems = useMemo(() => cartItems, [cartItems]);

  useEffect(() => {
    const hasQuantityGreaterThanZero = memoizedCartItems.some(
      (item) => item.quantity > 0
    );
    setIsButtonActive(!hasQuantityGreaterThanZero);
  }, [memoizedCartItems]);

  return (
    <>
      <ProductSlide
        isActive={isSliderActive}
        images={[product.image, ...product.subImages]}
        onClose={toggleSlider}
      />

      <div className="flex flex-col md:flex-row  mt-20 gap-6 justify-center w-full items-center">
        <div
          id="foto"
          className="flex flex-col  gap-3 w-8/12 md:w-5/12 items-center"
        >
          <div className="w-96 relative">
            <div>
              <div
                onClick={toggleSlider}
                id="zoom"
                className="flex absolute -right-2 -top-2 p-5"
              >
                <Image
                  src="/images/icon-zoom.png"
                  width={25}
                  height={25}
                  alt="icon-zoom"
                  className="brightness-0 mx-auto rounded-md "
                />
              </div>
            </div>

            <Image
              className="rounded-md"
              src={isCurrentImage}
              width={400}
              height={400}
              alt="product-image"
              onClick={toggleSlider}
            />
          </div>
          <div className="flex gap-2 w-96 ">
            {product.subImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={90}
                height={90}
                alt="product-sub-image"
                className=" rounded-md hover:ring-4 ring-yellow-500"
                onClick={() => bigPictureHandler(image)}
              />
            ))}
          </div>
        </div>

        <div
          id="bilgi"
          className="grid grid-row-3 gap-5 w-8/12 md:w-4/12 px-6 lg:px-0 pr-10 justify-self-start"
        >
          <h3 className="text-primary-orange font-sans">{product.company}</h3>
          <div>
            <h1 className="text-2xl font-sans text-neutral-black font-bold">
              {product.title}
            </h1>
          </div>
          <p className="text-body">{product.description}</p>

          <div className="flex gap-3">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="bg-primary-paleOrange w-12 text-primary-orange flex justify-center items-center font-bold rounded-md">
              %50
            </span>
          </div>
          <p className="text-neutral-grayishBlue line-through">$250.00</p>

          <div className="flex gap-5">
            <div className="flex items-center justify-around bg-neutral-lightGrayishBlue text-body h-12 rounded-md">
              <button className="w-10 p-4"  onClick={removeFromCartHandle}>
                <Image
                  src="/images/icon-minus.svg"
                  width={30}
                  height={30}
                  alt="icon-minus"
                  className="h-full rounded-md hover:ring-4 ring-yellow-500"
                 
                />
              </button>

              <p className="w-4 text-center ">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <button className="w-10 p-4" onClick={AddToCartHandler}>
                <Image
                  src="/images/icon-plus.svg"
                  width={30}
                  height={30}
                  alt="icon-plus"
                  className="h-full rounded-md  hover:ring-4 ring-yellow-500 "
                />
              </button>
            </div>

            <button
              className={`flex gap-2 items-center justify-center text-white px-4 py-2 rounded-md w-60 h-12 ${
                isButtonActive ? "bg-primary-orange" : "bg-gray-300"
              }`}
              onClick={AddToCartHandler}
              disabled={!isButtonActive}
            >
              <Image
                src="/images/icon-cart.svg"
                width={30}
                height={30}
                alt="icon-cart"
                className="h-full rounded-md"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
