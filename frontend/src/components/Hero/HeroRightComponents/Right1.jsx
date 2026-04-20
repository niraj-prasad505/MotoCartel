import glove from "../../../assets/glovelogo.png";
import { FaArrowRight } from "react-icons/fa";

const Right1 = () => {
  return (
    <div className="h-full bg-[#12151C] p-4 rounded-xl flex justify-between items-center relative overflow-hidden">

      <div className="z-10">
        <p className="text-white font-medium text-lg">
          Pro-Rider<br />V2 Gloves
        </p>

        <div className="rounded-full border w-10 mt-4 p-2">
          <FaArrowRight />
        </div>
      </div>

      <img
        src={glove}
        alt="gloves"
        className="absolute right-2 max-w-[120px] object-contain"
      />

    </div>
  );
};

export default Right1;