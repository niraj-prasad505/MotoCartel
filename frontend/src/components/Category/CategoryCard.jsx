// components/Category/CategoryCard.jsx
export default function CategoryCard({ title, items, image }) {
  return (
    <div className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 flex items-center justify-between hover:bg-[#1A2233] transition">
      
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{items} items</p>
      </div>

      <img src={image} alt={title} className="w-14 h-14 object-contain" />
    </div>
  );
}