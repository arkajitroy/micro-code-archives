import React, { useEffect } from "react";
import { services } from "../services";
import { useInView } from "react-intersection-observer";

import "./common.css";

const ItemsList: React.FC = () => {
  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    services.query_services.infinitePagination.getInfiniteScroll();
  const { ref, inView } = useInView({ threshold: 1.0 });

  if (status === "pending") <div>Loading ...</div>;
  if (status === "error") <div>Failed to Fetch! {error.message}</div>;

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  return (
    <div className="paginated-item-main-container">
      <h3>Infinite Scroll Items</h3>

      {data &&
        data.pages.map((page) => {
          const { data, currentPage } = page;
          return (
            <div key={currentPage}>
              {data.map((item, index) => {
                return (
                  <div className="paginated-item-container" key={index}>
                    <span>{item.title}</span>
                    <span> : ${item.price} </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      <div ref={ref}>
        {isFetchingNextPage ? (
          <p>Loading more...</p>
        ) : hasNextPage ? (
          <p>Load more</p>
        ) : (
          <p>No more items</p>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
