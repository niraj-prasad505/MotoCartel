import Breadcrumb from "../Common/Breadcrumb";

const ProductHeader = ({ productName }) => {
  return (
    <div className=" border-b border-gray-700">
      {/* Breadcrumb */}
      <Breadcrumb productName={productName} />

      {/* Title */}
      <h1 className="text-3xl font-semibold mt-3">
        {productName && productName !== "Product" ? productName : ""}
      </h1>
    </div>
  );
};

export default ProductHeader;