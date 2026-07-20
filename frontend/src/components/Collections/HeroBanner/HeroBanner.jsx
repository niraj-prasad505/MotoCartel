import React from 'react'
import BannerSlider from "./BannerSlider";



export default function HeroBanner({ banners }) {
  // console.log(banners)
  return (
    <div className="w-full">
      <BannerSlider banners={banners} />
    </div>
  );
}