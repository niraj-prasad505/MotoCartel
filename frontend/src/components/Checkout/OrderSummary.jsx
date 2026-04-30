const OrderSummary = ({ total = 2000, items = 1, next, step }) => {
  return (
    <div className="p-5 border border-gray-300 rounded-xl h-[70vh] flex flex-col justify-between shadow-sm">

      {/* TOP */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        {/* ITEMS */}
        <div className="flex justify-between text-sm mb-3">
          <span>Items ({items})</span>
          <span>₹{total}</span>
        </div>

        {/* PRICE DETAILS */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Delivery</span>
            <span className="text-green-500">Free</span>
          </div>

          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>₹0</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-500">-₹0</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* TOTAL */}
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* SAVINGS */}
        <p className="text-sm text-green-500 mt-2">
          You saved ₹0 on this order
        </p>
      </div>

      {/* BOTTOM */}
      <div className="mt-6 space-y-3">

        {/* CTA BUTTON */}
        <button
          onClick={next}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition active:scale-95"
        >
          {step === 3 ? "Place Order" : "Continue"}
        </button>

        {/* TRUST TEXT */}
        <p className="text-xs text-gray-500 text-center">
          🔒 100% Secure Payments
        </p>

        {/* EXTRA INFO */}
        <p className="text-xs text-gray-400 text-center">
          Easy returns • Fast delivery
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;