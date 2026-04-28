import React from "react";

const TotalReview = () => {
  const data = {
    5: 50,
    4: 20,
    3: 10,
    2: 5,
    1: 5,
  };

  const total = Object.values(data).reduce((a, b) => a + b, 0);

  const avg =
    total === 0
      ? 0
      : (
          Object.entries(data).reduce(
            (sum, [star, count]) => sum + star * count,
            0
          ) / total
        ).toFixed(1);

  return (
    <div className="flex w-full h-[250px]">

      {/* LEFT - 50% */}
      <div className="w-1/2 flex flex-col items-center justify-center text-white">
        <div className="flex items-end">
          <h1 className="text-[140px] font-bold">{avg}</h1>
          <span className="text-xl mb-10 ml-1">/5</span>
        </div>
        <p className="mt-2">({total} reviews)</p>
      </div>

      {/* RIGHT - 50% */}
      <div className="w-1/2 flex flex-col justify-center gap-2 px-6">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = data[star] || 0;
          const percentage = total ? (count / total) * 100 : 0;

          return (
            <div key={star} className="flex items-center gap-2">
              <span className="w-8 text-sm">⭐ {star}</span>

              <div className="flex-1 h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-orange-600 rounded"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default TotalReview;