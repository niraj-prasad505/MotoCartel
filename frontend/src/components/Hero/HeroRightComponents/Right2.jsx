import p11 from "../../../assets/p11.png";
import { FaArrowRight } from "react-icons/fa";
const Right2 = () => {
    return (
        <div className="bg-[#12151C] p-4 rounded-xl h-75 flex justify-between items-start relative overflow-hidden">

            {/* LEFT TEXT */}
            <div className="z-10 mt-3 w-91">
                <div className="flex justify-between">
                    <p className="text-white font-medium text-2xl w-70">Advanced Nav-Mount
& Brake System</p>
                    <div className="rounded-full border w-10.5 mt-5 p-2 border-white-500 bg-blend-color-burn">
                        <FaArrowRight size={24} />
                    </div>
                </div>
                <p className="text-sm text-gray-400 mt-6 w-60">Lightweight forged alloy with
integrated GPS cradle
Enhanced braking</p>
            </div>
            

            {/* IMAGE */}
            <img
                src={p11}
                alt="gloves"
                className="absolute right-0 bottom-2.5 w-60 object-contain"
            />

        </div>
    );
};
export default Right2;