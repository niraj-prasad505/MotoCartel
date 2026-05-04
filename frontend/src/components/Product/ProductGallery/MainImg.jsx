const MainImg = ({ image }) => {
  return (
    <img
      src={image}
      alt="product"
      className="max-h-90 w-full object-contain rounded-2xl"
    />
  );
};

export default MainImg;