import TotalReview from "./TotalReview";
import UserReview from "./UserReview";

const ProductReview = () => {
  return (
    <div className="w-full px-[5%] mt-6">
      
      <h1 className="text-2xl font-semibold mb-4">
        Rating & Review
      </h1>

      <div className="flex flex-col md:flex-row md:gap-1">

        {/* Left */}
        <div className="w-full md:flex-1 bg-amber-400 rounded-lg p-4">
          <TotalReview />
        </div>

        {/* Right */}
        <div className="w-full md:flex-1 bg-amber-600 rounded-lg p-4 mt-4 md:mt-0">
          <UserReview />
        </div>

      </div>

    </div>
  );
};

export default ProductReview;