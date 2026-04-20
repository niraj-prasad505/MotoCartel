export default function ProductCard({ image, title, price }) {
  return (
    <div className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 hover:scale-[1.02] transition">
      
      <img src={image} alt={title} className="w-full h-40 object-contain mb-3" />

      <h3 className="text-sm text-gray-300">{title}</h3>

      <p className="text-white font-semibold mt-1">${price}</p>

      <button className="mt-3 w-full bg-[#FF6A00] hover:bg-[#E55D00] text-white py-1.5 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
}