import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

const Hero = () => {
    return (
        <section className="bg-[#020617]">

  {/* Center container */}
  <div className="max-w-[1500px] mx-auto rounded-2xl shadow-lg">

    <div className="grid grid-cols-[1.2fr_1fr_1fr] text-white">
      <HeroLeft />
      <HeroCenter />
      <HeroRight />
    </div>

  </div>

</section>

    );
};

export default Hero;