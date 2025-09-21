import React from "react";
import { Header } from "../components/Header";
import ProductForm from "../components/ProductForm";

const CreateProduct = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const handleSubmit = () => {
    console.log(name, email, password);
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
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
    </main>
  );
};

export default CreateProduct;
