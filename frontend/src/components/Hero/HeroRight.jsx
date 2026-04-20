import { rightData } from "./data";
import Right1 from "./HeroRightComponents/Right1";
import Right2 from "./HeroRightComponents/Right2";
import RightColors from "./HeroRightComponents/RightColors";
const HeroRight = () => {
  return (
    <div className="flex flex-col h-full gap-4">

      {/* 20% */}
      <div className="flex-[2]">
        <RightColors />
      </div>

      {/* 30% */}
      <div className="flex-[3]">
        <Right1 />
      </div>

      {/* 50% (or 40% approx) */}
      <div className="flex-[5]">
        <Right2 />
      </div>

    </div>
  );
};

export default HeroRight;