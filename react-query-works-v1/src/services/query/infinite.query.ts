import { useInfiniteQuery } from "@tanstack/react-query";
import { services } from "..";

export const getInfiniteScroll = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useInfiniteQuery({
    queryKey: ["items"],
    queryFn: services.api_services.infinite.getAllProductsForScroll,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
