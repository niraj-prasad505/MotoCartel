import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products = [] }) {
  if (!products.length) {
    return <p className="text-gray-400">No products found</p>;
  }

  return (
    <div className="mt-10 px-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">
          Featured Products
        </h2>
        <span className="text-orange-400 text-sm cursor-pointer hover:underline">
          View All →
        </span>
      </div>

      {/* Products */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-3">
        {products.map((item) => (
          <div key={item?._id} className="min-w-60 shrink-0">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}