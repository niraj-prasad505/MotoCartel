import { useEffect, useState } from "react";
import { getCollectionData } from "../../services/collectionService";

export default function useCollection() {
    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCollection() {
            try {
                const res = await getCollectionData();

                setBanners(res.data.banners);
                setProducts(res.data.products);
            } finally {
                setLoading(false);
            }
        }

        fetchCollection();
    }, []);

    return { banners, products, loading };
}