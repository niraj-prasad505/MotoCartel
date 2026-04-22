import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import ShopByCategory from "../components/Category/ShopByCategory";
import TrendingNow from "../components/Products/TrendingNow";

const Home = () => {
  return (
    <div className="bg-[#0B0F17] min-h-screen">
      
      <Hero />

      <div className="h-12 bg-[#020617]"></div>

      <div className="max-w-350 mx-auto px-6 mt-1">
        <FeaturedProducts />
        <ShopByCategory />
        <TrendingNow />
      </div>

    </div>
  );
};

export default Home;