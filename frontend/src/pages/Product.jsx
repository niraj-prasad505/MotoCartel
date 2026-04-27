import React from "react";
import ProductGallery from "../components/Product/ProductGallery";
import ProductHeader from "../components/Product/ProductHeader";
import ProductReview from "../components/Product/ProductReview";
import ProductDetails from "../components/Product/ProductDetails";
import SimilarProducts from "../components/Product/SimilarProducts";

import img1 from "../assets/productIMG/1.png";
import img2 from "../assets/productIMG/2.png";
import img3 from "../assets/productIMG/3.png";

const images = [img1, img2, img3];

const Product = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* Header */}
      <div className="py-4 px-[5%]">
        <ProductHeader />
      </div>

      {/* Gallery + Details */}
      <div className="flex flex-col md:flex-row px-[5%] gap-6 md:gap-10">

        {/* Gallery */}
        <div className="w-full md:w-[48%] bg-[#1A1F29] h-[540px] flex justify-center items-center rounded-2xl">
          <ProductGallery images={images} />
        </div>

        {/* Details */}
        <div className="w-full md:w-[48%] rounded-2xl p-6 pt-1">
          <ProductDetails />
        </div>

      </div>

      {/* Reviews */}
      <div className="px-[5%] py-10">
        <ProductReview />
      </div>

      {/* Similar Products */}
      <div className="px-[5%] pb-12">
        <SimilarProducts />
      </div>

    </div>
  );
};

export default Product;