const CheckoutStepper = ({ step }) => {
  return (
    <div className="flex gap-4 mb-4">
      {["Address", "Review", "Payment"].map((item, i) => (
        <div
          key={i}
          className={`px-4 py-2 rounded ${
            step === i + 1 ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CheckoutStepper;