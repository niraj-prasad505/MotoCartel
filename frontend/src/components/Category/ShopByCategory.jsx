// components/Category/ShopByCategory.jsx
import CategoryCard from "./CategoryCard";
import helmet from "../../assets/mainIMG.png";

export default function ShopByCategory() {
  const categories = [
    { title: "Helmets", items: 12, image: helmet },
    { title: "Gloves", items: 8, image: helmet },
    { title: "Jackets", items: 10, image: helmet },
    { title: "Boots", items: 6, image: helmet },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-white mb-4">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((item, i) => (
          <CategoryCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}