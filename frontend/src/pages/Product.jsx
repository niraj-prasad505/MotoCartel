import React from "react";
import ProductGallery from "../components/Product/ProductGallery";
import ProductHeader from "../components/Product/ProductHeader";
import ProductReview from "../components/Product/ProductReview/ReviewMain";
import ProductDetails from "../components/Product/ProductDetails";
import SimilarProducts from "../components/Product/SimilarProducts";
import ProductGrid from "../components/Shop/ProductGrid";

import { getProductById } from "../services/product.service"
import { useEffect, useState } from "react";

import img1 from "../assets/productIMG/1.png";
import img2 from "../assets/productIMG/2.png";
import img3 from "../assets/productIMG/3.png";
import { useParams } from "react-router-dom";
import { UserStar } from "lucide-react";



const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);

        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);
  const images = [
    product?.images?.[0],
    product?.images?.[1],
    product?.images?.[2]
  ];


  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* Header */}
      <div className="pt-1 pb-3 px-[5%]">

        <ProductHeader />
      </div>

      {/* Gallery + Details */}
      <div className="flex flex-col md:flex-row px-[5%] gap-6 md:gap-10">

        {/* Gallery */}
        <div className="w-full md:w-[48%] bg-[#1A1F29] h-135 flex justify-center items-center rounded-2xl">
          <ProductGallery images={images} />
        </div>

        {/* Details */}
        <div className="w-full md:w-[48%] rounded-2xl p-6 pt-1">
          <ProductDetails product={product} />
        </div>

      </div>

      {/* Reviews */}
      <div className="px-[5%]">
        <ProductReview />
      </div>

      {/* Similar Products */}
      <h1 className="mt-9 ml-[10%] text-2xl font-semibold">Simelar products</h1>
      <div className="flex-1 overflow-y-auto no-scrollbar flex justify-center mt-8">

        <div className="w-full h-95 max-w-6xl px-5 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </div>

    </div>
  );
};

function mydisplay(product) {
  console.log(product)
  return;
}

export default Product;