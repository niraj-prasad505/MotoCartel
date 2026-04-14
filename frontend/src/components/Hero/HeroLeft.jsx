import { Grid2x2 } from "lucide-react";

const HeroLeft = () => {
  return (
    <div className="space-y-6 ml-3 p-14 pr-0 rounded-l-2xl bg-[#12151C] ">
        <div className="inline-flex gap-2">
            <Grid2x2 className="w-6 h-6 text-gray-300" />
            <span>Music is classic</span>
        </div>
      <h1 className="text-5xl font-bold leading-tight">
        Sequoia <br />
        <span className="text-orange-500">Precision</span> <br />
        Helmets.
      </h1>

      <p className="text-gray-400 max-w-md">
        Unrivaled Safety. Clear Vision.
      </p>

      <button className="bg-orange-500 px-6 py-3 rounded-full">
        Shop Now →
      </button>
      <div>
        <h1>follow us on:</h1>
      </div>
    </div>
  );
};
export default HeroLeft;