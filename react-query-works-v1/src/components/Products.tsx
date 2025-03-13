import React, { useCallback, useEffect, useState } from "react";
import { useIsFetching } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { services } from "../services";
import { IProducts } from "../@types/TProducts";
import Modal from "./shared/Modal";

import "./common.css";

const Products: React.FC = (): JSX.Element => {
  const [editFormTrigger, setEditFormTrigger] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<IProducts>();

  // hooks
  const isFetching = useIsFetching();
  const { register: registerAdd, handleSubmit: handleSubmitAdd } = useForm<IProducts>();
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
  } = useForm<IProducts>();

  // Queries-Hooks
  const getProductIdsQuery = services.query_services.products.useGetProductsIds();
  const getProductQuery = services.query_services.products.useGetProductsByIds(
    getProductIdsQuery.data
  );
  const addProductMutation = services.mutation_services.products.useAddProducts();
  const updateProductMutation = services.mutation_services.products.useUpdateProducts();
  const deleteProductMutation = services.mutation_services.products.useDeleteProducts();

  const handleOpenModalClick = (data: IProducts | undefined) => {
    console.log("data", data);
    if (data) {
      setEditFormData({ ...data, name: data.name, price: data.price });
      setEditFormTrigger(true);
    }
  };

  const handleCloseModalClick = useCallback(() => {
    setEditFormTrigger(false);
    resetEdit({});
  }, [resetEdit]);

  // Handle-Change-Submit
  const handleAddProductSubmitClick: SubmitHandler<IProducts> = useCallback(
    (payload: IProducts) => {
      addProductMutation.mutate(payload);
    },
    [addProductMutation]
  );

  const handleUpdateProductSubmitClick = useCallback(
    (payload: IProducts) => {
      !!payload &&
        updateProductMutation.mutate(
          { ...payload },
          {
            onSuccess: () => handleCloseModalClick(),
          }
        );
    },
    [handleCloseModalClick, updateProductMutation]
  );

  const handleDeleteProductsClick = useCallback(
    async (id: number | undefined) => {
      if (id) deleteProductMutation.mutateAsync(id);
    },
    [deleteProductMutation]
  );

  useEffect(() => {
    if (editFormData) resetEdit(editFormData);
  }, [editFormData, resetEdit]);

  return (
    <>
      {!!editFormTrigger && editFormData && (
        <Modal isOpen={editFormTrigger} onClose={handleCloseModalClick}>
          <form onSubmit={handleSubmitEdit(handleUpdateProductSubmitClick)}>
            <div className="modal-contents">
              <h3>Edit Product</h3>
              <input
                type="text"
                placeholder="Name"
                {...registerEdit("name")}
                defaultValue={editFormData.name}
              />
              <input
                type="text"
                placeholder="Price"
                {...registerEdit("price")}
                defaultValue={editFormData.price}
              />
              <input
                type="submit"
                disabled={updateProductMutation.isPending}
                value={updateProductMutation.isPending ? "Editing..." : "Edit Products"}
              />
            </div>
          </form>
        </Modal>
      )}

      <div className="container">
        <h3 className="subheading">Products</h3>
        <span>This component will render only the product</span>
        {/* FORM_COMPONENT */}

        <form onSubmit={handleSubmitAdd(handleAddProductSubmitClick)} className="form-container">
          <h3>New Products</h3>
          <input type="text" placeholder="Name" {...registerAdd("name")} />
          <input type="number" placeholder="Price" {...registerAdd("price")} />
          <input
            type="submit"
            disabled={addProductMutation.isPending}
            value={addProductMutation.isPending ? "Creating..." : "Add Products"}
          />
        </form>

        {/* ===================================================== */}
        <div className="products-container">
          <h3>Product Lists</h3>
          {!!isFetching && <span>Fetching ...</span>}
          {getProductQuery.map(({ data }, index) => {
            return (
              <div key={index} className="product-container">
                <button onClick={() => handleOpenModalClick(data)} className="edit-btn">
                  Edit
                </button>
                <span>
                  {data?.name}: ${data?.price}
                </span>
                <button className="delete-btn" onClick={() => handleDeleteProductsClick(data?.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
