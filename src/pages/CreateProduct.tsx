import React from "react";
import { Header } from "../components/Header";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../hooks/useProducts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { createProduct } = useProducts();
  const navigate = useNavigate();
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [color, setColor] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const handleSubmit = () => {
    createProduct({
      name,
      data: {
        price,
        color,
        category,
      },
    });
    toast.success("Product created successfully");
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
            <h2 className="text-2xl font-bold mb-6">Create Product</h2>
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

export default CreateProduct;
