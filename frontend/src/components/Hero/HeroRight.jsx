import { rightData } from "./data";
import Right1 from "./HeroRightComponents/Right1";
import Right2 from "./HeroRightComponents/Right2";
import RightColors from "./HeroRightComponents/RightColors";
const HeroRight = () => {
  return (
    <div className="space-y-6">

      <RightColors />
      <Right1 />
      <Right2 />

    </div>
  );
};

export default HeroRight;