import React from "react";
import { useAccessories } from "../shared/hooks/useAccessories";

export const Accessories: React.FC = () => {
  const { accessoriesData, isLoading, error } = useAccessories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {accessoriesData &&
        accessoriesData.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
    </div>
  );
};
