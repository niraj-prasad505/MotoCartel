import TotalReview from "./TotalReview";
import UserReview from "./UserReview";
import { CircleChevronRight } from "lucide-react";

const ProductReview = () => {
  return (
    <div className="w-full px-[5%] mt-6">
      
      <h1 className="text-2xl font-semibold mb-4">
        Rating & Review
      </h1>

      <div className="flex flex-col md:flex-row md:gap-1">

        {/* Left */}
        <div className="w-full md:flex-1 rounded-lg p-4 ml-4">
          <TotalReview />
        </div>

        {/* Right */}
        <div className="w-full md:flex-1 rounded-lg p-4 mt-4 md:mt-0 bg-gray-900">
          <UserReview />
        </div>
        <div className="flex justify-baseline items-center -ml-5">
          <button className="p-1 bg-white rounded-full">
            <CircleChevronRight color="#030303" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProductReview;