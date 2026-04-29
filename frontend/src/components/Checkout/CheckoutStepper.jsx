const CheckoutStepper = ({ step }) => {
  return (
    <div className="flex  mb-4 justify-center items-center">
        <div className="flex justify-between w-[70%]">
      {["Address", "Review", "Payment"].map((item, i) => (
        <div
          key={i}
          className={`px-4 py-2 rounded ${
            step === i + 1 ? "bg-orange-500 text-white" : "bg-black"
          }`}
        >
          {item}
        </div>
      ))}
      </div>
    </div>
  );
};

export default CheckoutStepper;