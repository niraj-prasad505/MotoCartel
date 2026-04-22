import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ title, items, image }) {
  return (
    <div className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 h-[110px] flex justify-between items-center hover:bg-[#1A2233] transition relative">
      
      {/* Left Content */}
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{items} items</p>

        {/* Arrow Button */}
        <button className="mt-3 bg-[#1F2937] p-2 rounded-full">
          <ArrowUpRight size={14} className="text-white" />
        </button>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-contain"
      />
    </div>
  );
}