import { useEffect, useState } from "react";
import { getAllBrands } from "../../services/brandsService";

export default function useBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);

        const response = await getAllBrands();

        setBrands(response.brands || []);
      } catch (err) {
        setError(err.message || "Failed to fetch brands");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return {
    brands,
    loading,
    error,
  };
}