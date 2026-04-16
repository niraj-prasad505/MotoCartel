import glove from "../../../assets/glovelogo.png";
import { FaArrowRight } from "react-icons/fa";
const Right1 = () => {
    return (
        <div className="bg-[#12151C] p-4 rounded-xl h-[170px] flex justify-between items-center relative overflow-visible">

            {/* LEFT TEXT */}
            <div className="z-10">
                <p className="text-white font-medium text-xl">Pro-Rider<br/>V2 Gloves</p>
                <div className="">
                    <FaArrowRight size={24} />
                </div>
            </div>

            {/* IMAGE */}
            <img
                src={glove}
                alt="gloves"
                className="absolute right-[0px] w-[150px] object-contain"
            />

        </div>
    );
};
export default Right1;