import React, { useEffect } from "react";
import { Header } from "../components/Header";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../hooks/useProducts";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const { product, updateProduct, getProduct } = useProducts();
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [color, setColor] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id?.toString() || "");
  }, [id]);

  useEffect(() => {
    if (product) {
      setName(product?.name || "");
      setPrice(product?.data?.price || 0);
      setColor(product?.data?.color || "");
      setCategory(product?.data?.category || "");
    }
  }, [product]);

  const handleSubmit = () => {
    updateProduct(id?.toString() || "", {
      name,
      data: {
        price,
        color,
        category,
      },
    });
    toast.success("Product updated successfully");
    setName("");
    setPrice(0);
    setColor("");
    setCategory("");
    navigate("/dashboard");
  };
  return (
    <main className="min-h-screen">
      <div className="border-b border-gray-200 shadow-md py-8">
        <div className="container-full">
          <Header />
        </div>
      </div>
      <div className="container-full bg-gray-100 py-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
          </div>
          <ProductForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
            color={color}
            setColor={setColor}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>
    </main>
  );
};

export default EditProduct;
