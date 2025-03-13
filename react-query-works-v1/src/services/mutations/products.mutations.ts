import { useMutation } from "@tanstack/react-query";
import { IProducts } from "../../@types/TProducts";
import { services } from "..";
import { reactQueryClient } from "../../config/config";

export const useAddProducts = () => {
  return useMutation({
    mutationFn: (payload: IProducts) => services.api_services.products.addProducts(payload),
    onMutate: () => console.log("Successfully Added!"),
    onSettled: async (_, error) => {
      console.log("Settled!");
      if (error) console.log("Error: ", error);
      else await reactQueryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useUpdateProducts = () => {
  return useMutation({
    mutationFn: (payload: IProducts) => {
      return services.api_services.products.updateProducts(payload.id, payload);
    },
    onSettled: async (_, error, variables) => {
      if (error) console.log("Error: ", error);
      else {
        await reactQueryClient.invalidateQueries({ queryKey: ["products"] });
        await reactQueryClient.invalidateQueries({
          queryKey: ["product", { id: variables.id }],
        });
      }
    },
  });
};

export const useDeleteProducts = () => {
  return useMutation({
    mutationFn: (id: number) => services.api_services.products.deleteProducts(id),
    onSettled: async (_, error) => {
      if (error) console.log("Error: ", error);
      else {
        await reactQueryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
};
