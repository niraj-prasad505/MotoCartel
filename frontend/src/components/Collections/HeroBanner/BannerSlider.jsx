import { useState, useEffect } from "react";
import BannerCard from "./BannerCard";

export default function BannerSlider({ banners = [] }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Duplicate banners
  const slides = [...banners, ...banners];

  useEffect(() => {
    if (!banners.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners]);

  useEffect(() => {
    if (index === banners.length) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
          });
        });
      }, 700); // same as transition duration

      return () => clearTimeout(timeout);
    }
  }, [index, banners]);

  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${animate ? "transition-transform duration-700" : ""}`}
        style={{
          transform: `translateX(-${index * 40}%)`,
        }}
      >
        {slides.map((banner, i) => (
          <BannerCard key={i} banner={banner} />
        ))}
      </div>
    </div>
  );
}