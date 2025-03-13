export type TPaginatedResponse<T> = {
  data: T;
  currentPage: number;
  nextPage: number | null;
};
