import Breadcrumb from "../Common/Breadcrumb";

const ProductHeader = ({ productName }) => {
  return (
    <div className="px-4 pb-3 border-b border-gray-700">
      {/* Breadcrumb */}
      <Breadcrumb productName={productName} />

      {/* Title */}
      <h1 className="text-3xl font-semibold mt-2">
        {productName && productName !== "Product" ? productName : ""}
      </h1>
    </div>
  );
};

export default ProductHeader;