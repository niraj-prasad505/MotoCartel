import BrandSlider from "./BrandSlider";
import BrandSection from "./BrandSection";

export default function BrandShowcase() {
  return (
    <section className="py-8">
      <BrandSlider />

      <div className="mt-10 space-y-16">
        <BrandSection slug="axor" />
        <BrandSection slug="smk" />
        <BrandSection slug="vega" />
      </div>
    </section>
  );
}