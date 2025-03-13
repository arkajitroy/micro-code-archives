import { TPaginatedResponse } from "./TApi";

type ProductRating = {
  rate: number;
  count: number;
};

export interface IProductsMixed {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export type TGetProductsScrollParams = {
  pageParam: number;
};

export type TResponseGetProductsForScroll = Promise<TPaginatedResponse<Array<IProductsMixed>>>;
