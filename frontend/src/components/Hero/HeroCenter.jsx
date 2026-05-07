import { useEffect, useState } from "react";

const HeroCenter = ({ img }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!img?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % img.length);
    }, 6000); // change every 2 sec

    return () => clearInterval(interval);
  }, [img]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden">

        {/* glow */}
        <div className="absolute w-40 h-40 bg-orange-500 rounded-full blur-[120px] opacity-30"></div>

        {/* image */}
        <img
          src={img[current]}
          alt="hero"
          className="relative z-10 w-[85%] max-w-112.5 object-contain transition-all duration-700"
        />

        {/* slider */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-[#1d202a] px-4 py-1 rounded-full">

          <span className="cursor-pointer">{"<"}</span>

          {img.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                index === current ? "text-orange-500" : "text-gray-400"
              }`}
            >
              o
            </span>
          ))}

          <span className="cursor-pointer">{">"}</span>

        </div>
      </div>
    </div>
  );
};

export default HeroCenter;