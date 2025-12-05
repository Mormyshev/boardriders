import { getProducts } from "../endpoints/products";
import { getAccessoriesQueryKey } from "../utils/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetAccessoriesQuery = () => {
  return useQuery({
    queryKey: getAccessoriesQueryKey(),
    queryFn: () => getProducts(),
  });
};
