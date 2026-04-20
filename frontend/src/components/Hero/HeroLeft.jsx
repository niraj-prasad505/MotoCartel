import { Grid2x2 } from "lucide-react";
import insta from "../../assets/followUS/instagram.png";
import linkedin from "../../assets/followUS/linkedin.png";
import x from "../../assets/followUS/x.png";
import yt from "../../assets/followUS/yt.png";

const HeroLeft = () => {
  return (
    <div className="space-y-6 px-8 py-10 pr-0">

      <div className="inline-flex gap-2">
        <Grid2x2 className="w-6 h-6 text-gray-300" />
        <span>Music is classic</span>
      </div>

      <h1 className="text-6xl font-bold leading-tight">
        Sequoia <br />
        <span className="text-orange-500">Precision</span> <br />
        Helmets.
      </h1>

      <p className="text-gray-300 text-base max-w-md">
        Unrivaled Safety. Clear Vision.
      </p>

      <p className="text-gray-500 text-sm max-w-md">
        Ride with total confidence. Sequoia Helmets are engineered for clarity and safety, with a built-in comms interface and advanced ventilation.
      </p>

      <button className="bg-[#FF6A00] hover:bg-[#FF7A1A] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(255,106,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,106,0,0.5)]">
        Shop Now →
      </button>

      <div className="flex gap-4 items-center">
        <span>follow us on:</span>
        <div className="flex gap-5">
          <img src={insta} className="w-6 h-6" />
          <img src={linkedin} className="w-7 h-7" />
          <img src={x} className="w-6 h-6" />
          <img src={yt} className="w-6 h-6" />
        </div>
      </div>

    </div>
  );
};

export default HeroLeft;