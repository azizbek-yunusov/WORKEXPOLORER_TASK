import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ConfirmModal } from "./ConfirmModal";
import toast from "react-hot-toast";

const ProductCard = () => {
  const { product, deleteProduct } = useProducts();

  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDelete = async () => {
    if (selectedId) {
      await deleteProduct(selectedId);
      setSelectedId(null);
      setOpenDeleteModal(false);
      toast.success("Product deleted successfully");
    }
  };

  const cards = [
    {
      label: "Product ID",
      value: "1",
    },
    {
      label: "Stock",
      value: "45 unites",
    },
    {
      label: "Category",
      value: "Electronics",
    },
    {
      label: "Status",
      value: "Active",
    },
  ];

  return (
    <>
      <div className="border-2 border-gray-200  shadow-md overflow-hidden rounded-xl  lg:mx-56">
        <div className="flex items-center justify-between bg-slate-50 p-7">
          <div>
            <h2 className="text-2xl font-bold">Product Details</h2>
            <p className="text-gray-400 text-sm mt-2">
              View and manage product information
            </p>
          </div>
          <div className="space-x-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-200 cursor-pointer rounded-lg text-black px-4 py-2 w-48"
            >
              {"< "}Back to Table
            </button>
            <button
              onClick={() => navigate(`/products/${product?.id}/edit`)}
              className="bg-gradient-to-r cursor-pointer from-orange-400 to-orange-600 rounded-lg text-white px-4 py-2 w-48"
            >
              {"✏️ "}Edit Product
            </button>
            <button
              onClick={() => {
                setOpenDeleteModal(true);
                setSelectedId(product?.id.toString() || "");
              }}
              className="bg-gradient-to-r cursor-pointer from-red-500 to-red-600 rounded-lg text-white px-4 py-2 w-48"
            >
              {"🗑️ "} Delete Product
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-7 bg-white">
          <div className="col-span-1">
            <div className="w-80 h-80 rounded-xl text-6xl border-2 border-dashed border-gray-300 bg-gray-200/50 flex_center">
              {/* <img src="" alt="" /> */}
              📱
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl font-bold">Product Details</h2>
            <h2 className="text-4xl mt-2 font-bold text-green-400">
              Product Details
            </h2>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellendus unde error reprehenderit explicabo
              necessitatibus recusandae laudantium doloremque harum sint. Eius
              soluta quisquam voluptatum veritatis eveniet!
            </p>
            <div className="grid grid-cols-2 gap-4 pt-5">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-gray-50 py-2.5 px-4 rounded-xl"
                >
                  <h3 className="text-lg">{card.label}</h3>
                  <p className="text-gray-700 mt-1 font-bold">{card.value}</p>
                </div>
              ))}
            </div>
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
    </>
  );
};

export default ProductCard;
