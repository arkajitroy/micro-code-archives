import { useQueries, useQuery } from "@tanstack/react-query";
import { services } from "..";

export const useGetProductsIds = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: services.api_services.products.getProductsIds,
  });
};

export const useGetProductsByIds = (ids: Array<number> | undefined) => {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["product", { id }],
        queryFn: () => services.api_services.products.getProductsById(id!),
      };
    }),
  });
};
