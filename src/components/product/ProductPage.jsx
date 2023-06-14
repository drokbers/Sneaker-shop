// ProductPage.js

import React from "react";
import ProductCard from "./ProductCard";

function ProductPage() {
  const products = [
    {
      id: 1,
      company: 'SNEAKER COMPANY',
      title: "Fall Limited Edition Sneakers",
      image: "/images/image-product-1.jpg",
      subImage1: "/images/image-product-1-thumbnail.jpg",
      subImage2: "/images/image-product-2-thumbnail.jpg",
      subImage3: "/images/image-product-3-thumbnail.jpg",
      subImage4: "/images/image-product-4-thumbnail.jpg",
      price: 10.99,
      description:
        "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    },
  ];

  const generateProducts = () =>
    products.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });

  return (
    <div>
  
      {generateProducts()}
    </div>
  );
}

export default ProductPage;