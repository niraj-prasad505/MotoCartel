import React from 'react'
import HeroBanner from "./HeroBanner/HeroBanner";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import BrandShowcase from "./Brands/BrandShowcase";

export default function SectionHeading({ banners, products}) {
  // console.log(banners)
  return (
    <>
      <HeroBanner banners={banners} />
      <TrendingProducts products={products} />
      <BrandShowcase/>
    </>
  );
}


