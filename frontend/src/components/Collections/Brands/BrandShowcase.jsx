import BrandSlider from "./BrandSlider";
import BrandSection from "./BrandSection";
import useBrands from "../../../hooks/collections/brands";

export default function BrandShowcase() {
  const { brands, loading, error } = useBrands();
  console.log(brands)
  // need product api

  const dummyProducts = [
    {
      _id: "687a10000000000000000001",
      name: "Axor Apex Venom Helmet",
      images: [
        "https://images.unsplash.com/photo-1558981806-ec527fa84c69?w=800"
      ],
      price: 5499,
      discount: 10,
      description:
        "Premium ISI & DOT certified full-face helmet with aerodynamic design.",
      category: "Helmets",
      stock: 25,
      isFeatured: true,
      isTrending: true,
      bgcolor: "#ffffff",
      brand: "687a20000000000000000001",
      rating: 4.8,
      reviewCount: 156,
    },
    {
      _id: "687a10000000000000000002",
      name: "Axor Riding Gloves",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
      ],
      price: 1899,
      discount: 15,
      description:
        "CE-certified riding gloves with knuckle protection and breathable fabric.",
      category: "Gloves",
      stock: 40,
      isFeatured: false,
      isTrending: true,
      bgcolor: "#ffffff",
      brand: "687a20000000000000000001",
      rating: 4.6,
      reviewCount: 92,
    },
    {
      _id: "687a10000000000000000003",
      name: "Axor Touring Jacket",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800"
      ],
      price: 6999,
      discount: 20,
      description:
        "All-weather touring jacket with CE Level-2 armor and waterproof lining.",
      category: "Jackets",
      stock: 15,
      isFeatured: true,
      isTrending: false,
      bgcolor: "#ffffff",
      brand: "687a20000000000000000001",
      rating: 4.9,
      reviewCount: 68,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <BrandSlider />
      <BrandSection />
    </>
  );
}