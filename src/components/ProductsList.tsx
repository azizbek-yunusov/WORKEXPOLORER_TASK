import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "./ConfirmModal";
import Pagination from "./Pagination";
import toast from "react-hot-toast";

const ProductsList = ({ filteredProducts }: { filteredProducts: any[] }) => {
  const { deleteProduct } = useProducts();
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.length
    ? filteredProducts.slice(startIndex, endIndex)
    : [];
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleDelete = async () => {
    if (selectedId) {
      await deleteProduct(selectedId);
      setSelectedId(null);
      setOpenDeleteModal(false);
      toast.success("Product deleted successfully");
    }
  };

  return (
    <div>
      <div className="shadow-md border-2 border-gray-200 rounded-xl  ">
        <div className="relative overflow-x-auto bg-gray-50 rounded-xl">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold">Product Inventory</h2>
            <p className="text-gray-500 text-sm mt-2">
              Manage your products with full CRUD operations
            </p>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase  border-y-2 border-y-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Created
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProducts?.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b  border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.data?.price || 100}</td>
                  <td className="px-6 py-4">
                    {product.data?.color || "black"}
                  </td>
                  <td className="px-6 py-4">{10}</td>
                  <td className="px-6 py-4">{"active"}</td>
                  <td className="px-6 py-4">{new Date().toLocaleString()}</td>
                  <td className="px-6 py-4 flex items-center space-x-3">
                    <button
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="bg-gray-500/10 p-2 cursor-pointer rounded-lg text-blue-600 hover:bg-blue-500 hover:text-white transition-all"
                    >
                      👁
                    </button>
                    <button
                      onClick={() => navigate(`/products/${product.id}/edit`)}
                      className="bg-orange-500/10 p-2 cursor-pointer rounded-lg text-blue-600 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => {
                        setOpenDeleteModal(true);
                        setSelectedId(product.id);
                      }}
                      className="bg-red-500/10 p-2 cursor-pointer rounded-lg text-blue-600 hover:bg-red-500 hover:text-white transition-all"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center w-full px-6 py-4">
            <div className="text-sm text-gray-500">
              Showing {currentPage} to {totalPages} of{" "}
              {filteredProducts?.length} results
            </div>
            <Pagination
              active={currentPage}
              setActive={setCurrentPage}
              total={totalPages}
            />
          </div>
        </div>
      </div>
      {openDeleteModal && (
        <ConfirmModal
          isOpen={openDeleteModal}
          onConfirm={handleDelete}
          onCancel={() => setOpenDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default ProductsList;
