import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutLayout from "../components/Checkout/CheckoutLayout";
import { getProductById } from "../services/product.service";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="bg-[#020617]">
      <CheckoutLayout product={product} />
    </div>
  );
};

export default Checkout;