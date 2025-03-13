import {
  addElectronics,
  deleteElectronics,
  getElectronicsById,
  getElectronicsIds,
  updateElectronics,
} from "./api/electronics.api";
import { getAllProductsForScroll } from "./api/infiniteScroll.api";
import {
  addProducts,
  deleteProducts,
  getProductsById,
  getProductsIds,
  updateProducts,
} from "./api/products.api";
import {
  useAddProducts,
  useDeleteProducts,
  useUpdateProducts,
} from "./mutations/products.mutations";
import { getInfiniteScroll } from "./query/infinite.query";
import { useGetProductsByIds, useGetProductsIds } from "./query/product.query";

export const services = {
  api_services: {
    electronics: {
      getElectronicsIds,
      getElectronicsById,
      addElectronics,
      updateElectronics,
      deleteElectronics,
    },
    products: {
      getProductsIds,
      getProductsById,
      addProducts,
      updateProducts,
      deleteProducts,
    },
    infinite: {
      getAllProductsForScroll,
    },
  },
  query_services: {
    products: {
      useGetProductsIds,
      useGetProductsByIds,
    },
    infinitePagination: {
      getInfiniteScroll,
    },
  },
  mutation_services: {
    products: {
      useAddProducts,
      useUpdateProducts,
      useDeleteProducts,
    },
  },
};
