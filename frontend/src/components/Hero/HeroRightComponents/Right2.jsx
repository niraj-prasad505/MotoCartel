import p11 from "../../../assets/p11.png";
import { FaArrowRight } from "react-icons/fa";

const Right2 = () => {
  return (
    <div className="h-full bg-[#12151C] p-4 rounded-xl flex justify-between items-start relative overflow-hidden">

      <div className="z-10 max-w-[250px]">
        <div className="flex justify-between items-start">
          <p className="text-white font-medium text-lg">
            Advanced Nav-Mount & Brake System
          </p>

          <div className="rounded-full border w-10 p-2">
            <FaArrowRight />
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Lightweight forged alloy with integrated GPS cradle Enhanced braking
        </p>
      </div>

      <img
        src={p11}
        alt="product"
        className="absolute right-0 bottom-2 w-65 object-contain"
      />

    </div>
  );
};

export default Right2;