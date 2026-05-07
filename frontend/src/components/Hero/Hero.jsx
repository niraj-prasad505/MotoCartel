import { useEffect, useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

const Hero = ({ data }) => {
  // console.log({data})
  const heroImages = data.landingHero.map(item => item.img);

  const heroName = data.landingHero.map(item => item.name);
  const herotitle = data.landingHero.map(item => item.title);
  const heroDiscreption = data.landingHero.map(item => item.description);
  const heroId = data.landingHero.map(item => item.id);

  console.log({ data });

  return (
    <section className="bg-[#020617] overflow-hidden">
      <div className="max-w-362 mx-auto">

        <div className="grid grid-cols-[2.5fr_0.8fr] gap-4 text-white h-152">

          {/* LEFT + CENTER */}
          <div className="grid grid-cols-[1.3fr_1.9fr] bg-[#12151C] rounded-2xl overflow-hidden">

            <HeroLeft name={heroName} title={herotitle} description={heroDiscreption} id={heroId} />
            <HeroCenter img={heroImages}/>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <HeroRight  />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;