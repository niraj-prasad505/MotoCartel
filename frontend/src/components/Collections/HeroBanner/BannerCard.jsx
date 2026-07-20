export default function BannerCard({ banner }) {
  return (
    <div className="w-[40%] shrink-0 px-3">
      <img
        src={banner.image}
        alt=""
        className="w-full h-30 lg:h-70 rounded-2xl object-cover"
      />
    </div>
  );
}