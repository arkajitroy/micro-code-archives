import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../../config/config";
import { IElectronics } from "../../@types/TElectronics";

const API = axios.create({ baseURL: API_BASE_URL });
const endpoint = "electronics";

const handleResponse = <T>(request: AxiosResponse<T>): T => request.data;

export const getElectronicsIds = async () => {
  const request = await API.get<Array<IElectronics>>(endpoint);
  return handleResponse(request).map((electronics) => electronics.id);
};

export const getElectronicsById = async (_id: number) => {
  const request = await API.get<IElectronics>(`${endpoint}/${_id}`);
  return handleResponse(request);
};

export const addElectronics = async (payload: IElectronics) => {
  const request = await API.post<IElectronics>(endpoint, payload);
  return handleResponse(request);
};

export const updateElectronics = async (_id: number, payload: IElectronics) => {
  const request = await API.put<IElectronics>(`${endpoint}/${_id}`, payload);
  return handleResponse(request);
};

export const deleteElectronics = async (_id: number) => {
  const request = await API.delete<void>(`${endpoint}/${_id}`);
  return request.status === 200;
};
