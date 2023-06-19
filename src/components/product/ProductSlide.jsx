import Image from "next/image";
import React, { useState, useEffect } from "react";

function ProductSlide({ images, isActive,onClose }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleNextClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };
  const handlePrevClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  const selectFromThumbnailHandler = (image) => {
    setCurrentImage(image);
  }


  if (!isActive) return;

  return (
    <div className="fixed top-0 w-screen h-screen opacity-92 bg-neutral-black z-10 flex items-center ">
      <div className=" grid grid-col justify-center gap-1 mx-auto w-full">
        <div className="flex">
          ``
          <div className="flex items-center h-full relative w-full">
            <div className="flex items-center pr-0.5 w-8 h-8   rounded-full absolute -right-0 top-1   ">
              <Image
                src="/images/icon-close.svg"
                width={15}
                height={15}
                alt="icon-close"
                className="brightness-0 mx-auto  "
                onClick={onClose}
                
              />
            </div>
            <div className="flex items-center pr-0.5 w-8 h-8 bg-white absolute -left-5 rounded-full hover:ring-4 ring-yellow-500">
              <Image
                src="/images/icon-previous.svg"
                width={8}
                height={8}
                alt="icon-previous"
                className="brightness-0 mx-auto  "
                onClick={handlePrevClick}
              />
            </div>
            <div className="flex items-center pr-0.5 w-8 h-8 bg-white absolute -right-4 rounded-full hover:ring-4 ring-yellow-500">
              <Image
                src="/images/icon-previous.svg"
                width={8}
                height={8}
                alt="icon-previous"
                className="brightness-0 mx-auto rotate-180"
                onClick={handleNextClick}
              />
            </div>

            <Image
              src={currentImage}
              width={400}
              height={400}
              alt="product-main-image"
              className="rounded-md "
            />
          </div>
        </div>

        <div className="grid grid-cols-4 justify-between gap-4 mt-4 ml-4 w-[400px] ">
          {images.slice(1).map((image) => (
            <Image
              src={image}
              key={image}
              width={100}
              height={100}
              alt="product-image"
              className="rounded-md hover:ring-4 ring-yellow-500 "
              onClick={() => selectFromThumbnailHandler(image)}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSlide;
