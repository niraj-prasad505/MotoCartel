import { useState } from "react";
import MainImg from "./MainImg";
import ImgList from "./ImgList";

const ProductGallery = ({ images = [] }) => {
  const [activeImg, setActiveImg] = useState(images[0] || "");

  if (!images.length) return <p className="text-center">No Images</p>;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      
      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <MainImg image={images?.[0]} />
      </div>

      {/* Thumbnail List */}
      <div className="w-full flex justify-center mt-4 mb-3.5">
        <ImgList
          images={images}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
        />
      </div>

    </div>
  );
};

export default ProductGallery;