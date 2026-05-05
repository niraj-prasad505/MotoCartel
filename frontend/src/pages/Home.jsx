import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import ShopByCategory from "../components/Category/ShopByCategory";
import TrendingNow from "../components/Products/TrendingNow";
import { getHomeData } from "../services/product.service";
import { getHeroData } from "../services/product.service";

const Home = () => {
  const [homeData, setHomeData] = useState({
    featured: [],
    trending: [],
    categories: [],
  });
  const [heroData, setHeroData] = useState({
    LandingHero: [],
    highlights1: [],
    highlights2: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homeRes, heroRes] = await Promise.all([
          getHomeData(),
          getHeroData(),
        ]);
        setHomeData(homeRes.data);
        setHeroData(heroRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2 className="text-white">Loading...</h2>;

  return (
    <div className="bg-[#0B0F17] min-h-screen">
      <Hero data={heroData} />

      <div className="h-12 bg-[#020617]"></div>

      <div className="max-w-350 mx-auto px-6 mt-1">
        <FeaturedProducts products={homeData.featured} />
        <ShopByCategory categories={homeData.categories} />
        <TrendingNow products={homeData.trending} />
      </div>
    </div>
  );
};

export default Home;