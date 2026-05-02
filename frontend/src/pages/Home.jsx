import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import ShopByCategory from "../components/Category/ShopByCategory";
import TrendingNow from "../components/Products/TrendingNow";
import { getHomeData } from "../services/product.service";

const Home = () => {
  const [data, setData] = useState({
    featured: [],
    trending: [],
    categories: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getHomeData();
        setData(res.data); // axios → data inside data
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
      <Hero />

      <div className="h-12 bg-[#020617]"></div>

      <div className="max-w-350 mx-auto px-6 mt-1">
        <FeaturedProducts products={data.featured} />
        <ShopByCategory categories={data.categories} />
        <TrendingNow products={data.trending} />
      </div>
    </div>
  );
};

export default Home;