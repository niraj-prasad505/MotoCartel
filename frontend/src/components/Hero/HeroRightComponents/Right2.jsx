import p11 from "../../../assets/p11.png";
const Right2 = () => {
    return (
        <div className="bg-[#12151C] p-4 rounded-xl h-[150px] flex justify-between items-center relative overflow-visible">

            {/* LEFT TEXT */}
            <div className="z-10">
                <p className="text-white font-medium">Pro-Rider V2 Gloves</p>
            </div>

            {/* IMAGE */}
            <img
                src={p11}
                alt="gloves"
                className="absolute right-[0px] bottom-[-10px] w-[160px] object-contain"
            />

        </div>
    );
};
export default Right2;