import mainIMG from "../../assets/helmat20.png";

const HeroCenter = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">

      <div className="relative w-full h-full flex justify-center items-center overflow-hidden">

        {/* glow */}
        <div className="absolute w-40 h-40 bg-orange-500 rounded-full blur-[120px] opacity-30"></div>

        {/* image */}
        <img
          src={mainIMG}
          alt="helmet"
          className="relative z-10 w-[85%] max-w-[450px] object-contain"
        />

        {/* 🔥 SLIDER (FIXED POSITION) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-[#1d202a] px-4 py-1 rounded-full">
          <span>{"<"}</span>
          <span className="text-orange-500">o</span>
          <span>o</span>
          <span>o</span>
          <span>{">"}</span>
        </div>

      </div>

    </div>
  );
};

export default HeroCenter;