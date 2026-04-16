const RightColors = () => {
  return (
    <div className="bg-[#12151C] p-4 rounded-xl flex flex-col gap-3">
      <p className="text-white font-medium">Available Colors</p>

      <div className="flex gap-3">
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};
export default RightColors;