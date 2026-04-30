const CheckoutStepper = ({ step }) => {
  const steps = ["Address", "Review", "Payment"];

  return (
    <div className="w-full flex justify-center items-center mb-2 -mt-3">
      <div className="flex items-center w-[70%] justify-between relative">

        {steps.map((label, i) => {
          const current = i + 1;
          const isActive = step === current;
          const isCompleted = step > current;

          return (
            <div key={i} className="flex-1 flex flex-col items-center relative">

              {/* LINE */}
              {i !== steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-[3px] bg-gray-200 z-0 overflow-hidden rounded-full">
                  <div
                    className={`h-full transition-all duration-500 ease-in-out ${
                      step > current ? "bg-green-500 w-full" : "w-0"
                    }`}
                  />
                </div>
              )}

              {/* CIRCLE */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold z-10 transition-all duration-300
                ${
                  isCompleted
                    ? "bg-green-500 text-white shadow-md"
                    : isActive
                    ? "bg-orange-500 text-white scale-110 shadow-lg"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {isCompleted ? "✓" : current}
              </div>

              {/* LABEL */}
              <p
                className={`mt-3 text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "text-orange-500"
                    : isCompleted
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutStepper;