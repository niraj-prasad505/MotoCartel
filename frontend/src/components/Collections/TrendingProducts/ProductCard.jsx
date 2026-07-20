export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl border bg block p-3 shadow-sm hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 text-lg font-semibold">
        {product.name}
      </h3>

      <p className="mt-1 text-gray-500">
        ₹{product.price}
      </p>

      <button className="mt-4 w-full rounded-lg bg-black py-2 text-white hover:bg-gray-800">
        Add to Cart
      </button>

    </div>
  );
}