const PaymentSection = ({ payment, setPayment }) => {
  return (
    <div className="p-4 border rounded">
      <h2>Select Payment</h2>

      <select
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
      >
        <option value="">Choose</option>
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="NetBanking">Net Banking</option>
      </select>

      <button className="mt-4">
        Place Order
      </button>
    </div>
  );
};

export default PaymentSection;