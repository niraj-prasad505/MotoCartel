const MainImg = ({ image }) => {
  return (
    <img
      src={image}
      alt="product"
      className="max-h-[350px] object-contain rounded-2xl"
    />
  );
};

export default MainImg;