const ImgList = ({ images, activeImg, setActiveImg }) => {
  return (
    <div className="flex gap-4 justify-center">
      {images.map((img, i) => (
        <div
          key={i}
          onClick={() => setActiveImg(img)}
          className={`w-25 h-25 bg-white rounded-xl p-2 cursor-pointer transition-all duration-200
            ${activeImg === img 
              ? "border-2 border-gray-500 scale-105" 
              : "border border-gray-300 hover:scale-105"
            }`}
        >
          <img
            src={img}
            alt="thumb"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImgList;