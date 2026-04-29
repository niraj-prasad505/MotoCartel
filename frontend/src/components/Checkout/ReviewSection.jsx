const ReviewSection = ({ address, next }) => {
  return (
    <div className="p-4 border rounded">
      <h2>Review</h2>

      <p>{address?.name}</p>
      <p>{address?.city}</p>

      <button onClick={next}>
        Continue to Payment
      </button>
    </div>
  );
};

export default ReviewSection;