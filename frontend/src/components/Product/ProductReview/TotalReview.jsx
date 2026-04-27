const TotalReview = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">

      {/* Left */}
      <div className="flex-1 min-h-45 md:min-h-60 flex items-center justify-center bg-amber-50">
        Left Side
      </div>

      {/* Right */}
      <div className="flex-1 min-h-45 md:min-h-60 flex items-center justify-center bg-amber-800 text-white">
        Right Side
      </div>

    </div>
  );
};

export default TotalReview;