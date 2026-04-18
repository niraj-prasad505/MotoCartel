import mainIMG from "../../assets/helmat20.png";
var a = "<"
var b = "o"
var c = ">"
const HeroCenter = () => {
  return (
    <div className="h-155 w-135 bg-[#12151C] rounded-r-2xl flex flex-col items-center">

      {/* IMAGE SECTION */}
      <div className="relative h-135 w-135 flex overflow-hidden justify-center items-center rounded-2xl">

        {/*  ORANGE GLOW */}
        <div className="absolute w-25 h-57.5 
                    bg-orange-500 rounded-full 
                    blur-[120px] opacity-40">
        </div>

        {/* HELMET */}
        <img
          src={mainIMG}
          alt="helmet"
          className="relative z-10 w-155 object-contain"
        />

      </div>

      {/* SLIDER */}
      <div className="gap-3 flex bg-[#1d202a] h-7 w-25 justify-center rounded-2xl mt-7">
        <button>{a}</button>
        <div className="gap-1 flex">
          <button className="text-orange-600">{b}</button>
          <button>{b}</button>
          <button>{b}</button>
        </div>
        <button>{c}</button>
      </div>

    </div>
  );
};
export default HeroCenter;