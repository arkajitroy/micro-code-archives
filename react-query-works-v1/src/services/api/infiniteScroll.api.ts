import axios, { AxiosResponse } from "axios";
import {
  IProductsMixed,
  TGetProductsScrollParams,
  TResponseGetProductsForScroll,
} from "../../@types/TProductsMixed";

const API_URL = "https://fakestoreapi.com";

const API = axios.create({ baseURL: API_URL });
const endpoint = "products";

const handleResponse = <T>(request: AxiosResponse<T>): T => request.data;

const ITEM_LIMIT = 10;

export const getAllProductsForScroll = async ({
  pageParam = 1,
}: TGetProductsScrollParams): TResponseGetProductsForScroll => {
  const request = await API.get<Array<IProductsMixed>>(
    `${endpoint}?page=${pageParam}&limit=${ITEM_LIMIT}`
  );

  // required paginated result
  const data: Array<IProductsMixed> = handleResponse(request);
  const currentPage = pageParam;
  const nextPage = pageParam + ITEM_LIMIT < data.length ? pageParam + ITEM_LIMIT : null;

  return { data, currentPage, nextPage };
};
