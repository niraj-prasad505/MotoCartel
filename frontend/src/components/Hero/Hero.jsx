import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="bg-[#020617]">

      {/* Center container */}
      <div className="max-w-380 h-158 mx-auto rounded-2xl shadow-lg">

        <div className="grid grid-cols-[1fr_2fr_1.5fr] text-white">
          <HeroLeft />
          <HeroCenter />
          <HeroRight />
        </div>

      </div>
      <div className=" bg-linear-to-b from-[#12151C] to-white h-4"></div>

    </section>

  );
};

export default Hero;