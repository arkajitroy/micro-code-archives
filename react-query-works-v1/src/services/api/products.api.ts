import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../../config/config";
import { IProducts } from "../../@types/TProducts";

const API = axios.create({ baseURL: API_BASE_URL });
const endpoint = "products";

const handleResponse = <T>(request: AxiosResponse<T>): T => request.data;

export const getProductsIds = async () => {
  const request = await API.get<Array<IProducts>>(endpoint);
  return handleResponse(request).map((product) => product.id);
};

export const getProductsById = async (_id: number) => {
  const request = await API.get<IProducts>(`${endpoint}/${_id}`);
  return handleResponse(request);
};

export const addProducts = async (product: IProducts) => {
  const request = await API.post<IProducts>(endpoint, product);
  return handleResponse(request);
};

export const updateProducts = async (_id: number, product: IProducts) => {
  const request = await API.put<IProducts>(`${endpoint}/${_id}`, product);
  return handleResponse(request);
};

export const deleteProducts = async (_id: number) => {
  const request = await API.delete<void>(`${endpoint}/${_id}`);
  return request.status === 200;
};
