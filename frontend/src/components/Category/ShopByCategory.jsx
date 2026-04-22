import CategoryCard from "./CategoryCard";
import helmet from "../../assets/mainIMG.png";

export default function ShopByCategory() {
  const categories = [
    { title: "Helmets", items: 12, image: helmet },
    { title: "Gloves", items: 8, image: helmet },
    { title: "Jackets", items: 10, image: helmet },
    { title: "Boots", items: 6, image: helmet },
    { title: "Accessories", items: 6, image: helmet },
    { title: "Accessories", items: 6, image: helmet },
    { title: "Accessories", items: 6, image: helmet },
    { title: "Accessories", items: 6, image: helmet },
    { title: "Accessories", items: 6, image: helmet },
    { title: "Accessories", items: 6, image: helmet },
  ];

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
            <CategoryCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}