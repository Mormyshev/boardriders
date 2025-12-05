import { useGetAccessoriesQuery } from "../api/queries/useGetAccessoriesQuery";

export const useAccessories = () => {
  const { data, isLoading, error } = useGetAccessoriesQuery();

  return { accessoriesData: data, isLoading, error };
};
