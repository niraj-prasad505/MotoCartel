import { motion } from "framer-motion";
import useBrands from "../../../hooks/collections/brands";

export default function BrandShowcase() {
  const { brands, loading, error } = useBrands();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const scrollingBrands = [...brands, ...brands];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl bg-black p-6">

          

          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {scrollingBrands.map((brand, index) => (
              <div
                key={`${brand._id}-${index}`}
                className="shrink-0"
              >
                <div className="flex h-30 w-60 items-center justify-center rounded-xl bg-white p-3">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}