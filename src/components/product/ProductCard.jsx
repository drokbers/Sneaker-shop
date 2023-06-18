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

  const sliderHandler = () => {
    setIsSliderActive(!isSliderActive);
  };

  const closeSlideHandler = () => {
    setIsSliderActive(false);
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
        onClose={closeSlideHandler}
      />

      <div className="flex flex-col md:flex-row  mt-20 gap-10 justify-center w-full items-center">
        <div
          id="foto"
          className="flex flex-col relative gap-3 w-96 flex-shrink-0"
        >
          <div className="w-96">
            <div>
              <button id="zoom" className="flex absolute -right-2">
                <Image
                  src="/images/icon-zoom.png"
                  width={25}
                  height={25}
                  alt="icon-zoom"
                  className="brightness-0 mx-auto rounded-md "
                  onClick={sliderHandler}
                />
              </button>
            </div>

            <Image
              className="rounded-md"
              src={isCurrentImage}
              width={400}
              height={400}
              alt="product-image"
              onClick={sliderHandler}
            />
          </div>
          <div className="flex gap-2">
            {product.subImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={100}
                height={100}
                alt="product-sub-image"
                className="w-full h-full rounded-md hover:ring-4 ring-yellow-500"
                onClick={() => bigPictureHandler(image)}
              />
            ))}
          </div>
        </div>

        <div
          id="bilgi"
          className="grid grid-row-3 gap-5 w-1/2 md:w-3/12 justify-self-start"
        >
          <h1 className="text-primary-orange font-sans">{product.company}</h1>
          <div>
            <h1 className="text-2xl font-sans text-neutral-black font-bold">
              {product.title}
            </h1>
          </div>
          <p className="text-body">{product.description}</p>

          <div className="flex gap-3">
            <p className="text-2xl font-bold">${product.price}</p>
            <p className="bg-primary-paleOrange w-12 text-primary-orange flex justify-center items-center font-bold rounded-md">
              %50
            </p>
          </div>
          <p className="text-neutral-grayishBlue line-through">$250.00</p>
          <div>
            <div className="flex gap-5">
              <div className="flex items-center justify-around bg-neutral-lightGrayishBlue text-body h-12 rounded-md">
                <button onClick={removeFromCartHandle}>
                  <div className="w-3">
                    <Image
                      src="/images/icon-minus.svg"
                      width={30}
                      height={30}
                      alt="icon-minus"
                      className="h-full rounded-md hover:ring-4 ring-yellow-500"
                    />
                  </div>
                </button>
                <p className="w-4 ">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </p>
                <button onClick={AddToCartHandler}>
                  <div className="w-3">
                    <Image
                      src="/images/icon-plus.svg"
                      width={30}
                      height={30}
                      alt="icon-plus"
                      className="h-full rounded-md  hover:ring-4 ring-yellow-500 "
                    />
                  </div>
                </button>
              </div>

              <div className="flex">
                <button
                  className={`flex items-center justify-center text-white px-4 py-2 rounded-md w-60 h-12 ${
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
                  <span className="ml-2">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
