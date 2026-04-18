import glove from "../../../assets/glovelogo.png";
import { FaArrowRight } from "react-icons/fa";
const Right1 = () => {
    return (
        <div className="bg-[#12151C] p-4 rounded-xl h-45 flex justify-between items-center relative overflow-visible">

            {/* LEFT TEXT */}
            <div className="z-10">
                <p className="text-white font-medium text-xl">Pro-Rider<br/>V2 Gloves</p>
                <div className="rounded-full border w-10.5 mt-5 p-2 border-white-500 bg-blend-color-burn">
                    <FaArrowRight size={24} />
                </div>
            </div>

            {/* IMAGE */}
            <img
                src={glove}
                alt="gloves"
                className="absolute right-3 w-37.5 object-contain"
            />

        </div>
    );
};
export default Right1;