const PaymentSection = ({ payment, setPayment }) => {
  const methods = [
    {
      id: "UPI",
      title: "UPI",
      desc: "Pay using Google Pay, PhonePe, Paytm",
    },
    {
      id: "COD",
      title: "Cash on Delivery",
      desc: "Pay when your order arrives",
    },
    {
      id: "NetBanking",
      title: "Net Banking",
      desc: "All major banks supported",
    },
  ];

  return (
    <div className="p-6 border border-gray-300 rounded-xl space-y-6 ">

      <h2 className="text-xl font-semibold">Payment Method</h2>

      <div className="space-y-4">
        {methods.map((item) => {
          const isActive = payment === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setPayment(item.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex justify-between items-center
              ${
                isActive
                  ? "border-orange-500 bg-orange-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              {/* LEFT */}
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>

              {/* RIGHT RADIO */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition
                ${
                  isActive
                    ? "border-orange-500"
                    : "border-gray-400"
                }`}
              >
                {isActive && (
                  <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SMALL NOTE */}
      <p className="text-xs text-gray-400">
        Your payment information is secure and encrypted 🔒
      </p>
    </div>
  );
};

export default PaymentSection;