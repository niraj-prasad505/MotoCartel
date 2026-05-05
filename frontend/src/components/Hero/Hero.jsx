import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

const Hero = ({data}) => {
  return (
    <section className="bg-[#020617] overflow-hidden">

      <div className="max-w-362 mx-auto">

        {/* LEFT + CENTER = 1 block | RIGHT = separate */}
        <div className="grid grid-cols-[2.5fr_0.8fr] gap-4 text-white h-152">

          {/* LEFT + CENTER */}
          <div className="grid grid-cols-[1.3fr_1.9fr] bg-[#12151C] rounded-2xl overflow-hidden">

            <HeroLeft />
            <HeroCenter />

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <HeroRight />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;