import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import ShopByCategory from "../components/Category/ShopByCategory";
import TrendingNow from "../components/Products/TrendingNow";

const Home = () => {
  return (
    <div className="bg-[#0B0F17] min-h-screen">
      
      <Hero />

      <div className="max-w-[1400px] mx-auto px-6">
        <FeaturedProducts />
        <ShopByCategory />
        <TrendingNow />
      </div>

    </div>
  );
};

export default Home;