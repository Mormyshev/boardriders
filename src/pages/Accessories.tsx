import React, { useState, useEffect } from "react";
import { getProducts } from "@/shared/api/endpoints/products";
import type { Product } from "@/shared/api/endpoints/products";
export const Accessories = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
        debugger;
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return <div>Accessories</div>;
};
