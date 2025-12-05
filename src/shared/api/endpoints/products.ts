import { $host } from "../instances/axios";
import type { Product } from "../types/products";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await $host.get<Product[]>("/products");

  return data;
};
