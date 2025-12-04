import type { ApiResponse, ApiError } from "../types";
import { $host } from "../instances/axios";
import { AxiosError } from "axios";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const getProducts = async () => {
  try {
    const response: any = await $host.get("/products");

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // Ошибка от сервера
      throw {
        message: "Failed to fetch products",
        code: axiosError.response.status || 500,
      } as ApiError;
    } else if (axiosError.request) {
      // Ошибка запроса (например, нет соединения)
      throw {
        message: "Network error: Failed to fetch products",
        code: 503,
      } as ApiError;
    } else {
      // Другая ошибка
      throw {
        message: "Failed to fetch products",
        code: 500,
      } as ApiError;
    }
  }
};
