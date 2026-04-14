import { rightData } from "./data";

const HeroRight = () => {
  return (
    <div className="space-y-6">
      {rightData.map((item) => (
        <div key={item.id} className="bg-[#0b1220] p-4 rounded-xl">
          <p>{item.title}</p>
        </div>
      ))}
      
    </div>
  );
};

export default HeroRight;