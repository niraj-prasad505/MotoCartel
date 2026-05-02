import CategoryCard from "./CategoryCard";
import helmet from "../../assets/mainIMG.png";

export default function ShopByCategory({ categories = [] }) {

  return (
    <div className="mt-10 px-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">
          Shop by Category
        </h2>
        <span className="text-gray-400 text-sm cursor-pointer hover:text-white">
          View all →
        </span>
      </div>

      {/* Cards Row */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {categories.map((item, i) => (
          <div key={i} className="min-w-[220px] flex-shrink-0">
            <CategoryCard 
              title={item}
              image={item.image}
           />
          </div>
        ))}
      </div>
    </div>
  );
}