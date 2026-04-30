const ReviewSection = ({ address, next }) => {
  if (!address) {
    return <p>No address found</p>;
  }

  return (
    <div className="p-6 border border-gray-300 rounded-xl space-y-6">

      {/* TITLE */}
      <h2 className="text-xl font-semibold">Review Your Order</h2>

      {/* PRODUCT */}
      <div className="flex gap-5 border-b pb-5">
        <img
          className="w-28 h-28 object-cover rounded-lg"
          src="https://www.mxstore.in/cdn/shop/files/FJT307_1270MF_WLR.jpg?v=1698228266&width=1214"
          alt=""
        />

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="font-medium">
              Abdul Jacket 2.0 (XL)
            </h1>
            <p className="text-sm text-gray-500">
              Seller: Abdul Store
            </p>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Qty: 1
            </span>

            <span className="font-semibold">
              ₹2000
            </span>
          </div>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="border-b pb-5">
        <h3 className="font-semibold mb-2">Delivery Address</h3>

        <p className="text-sm">
          {address.name} • {address.phone}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          {address.address}, {address.landmark}
        </p>

        <p className="text-sm text-gray-600">
          {address.city} - {address.pincode}
        </p>
      </div>

      {/* PRICE */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹2000</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Delivery</span>
          <span className="text-green-500">Free</span>
        </div>

        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total</span>
          <span>₹2000</span>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={next}
        className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default ReviewSection;