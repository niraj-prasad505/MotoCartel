// import SectionHeading from "../SectionHeading";
import ProductGrid from "./ProductGrid";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";


export default function TrendingProducts({ products }) {
  const { user } = useContext(UserContext);
  // console.log(user)
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">

        {/* <SectionHeading
            title="Niraj, You May Also Like"
            subtitle="Trending products for you"
          /> */}
        <h1 className="font-bold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
  {user?.fullname || "Guest"}, You May Also Like
</h1>

<p className="mt-1 text-sm text-gray-400 sm:text-base lg:text-lg">
  Trending products for you
</p>

        <ProductGrid products={products} />

      </div>
    </section>
  );
}