import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductsList from "../components/ProductsList";
import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductsDashboard = () => {
  const { products, fetchProducts } = useProducts();
  const [term, setTerm] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products?.length
    ? products?.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) &&
          (status === null || product?.data?.status === status) &&
          (category === null || product?.data?.category === category)
      )
    : [];
  return (
    <main className="min-h-screen">
      <div className="border-b border-gray-200 shadow-md py-8">
        <div className="container-full">
          <Header />
          <SearchBar
            term={term}
            setTerm={setTerm}
            setStatus={setStatus}
            setCategory={setCategory}
            status={status}
            category={category}
          />
        </div>
      </div>
      <div className="container-full bg-gray-100 py-8">
        <ProductsList filteredProducts={filteredProducts} />
      </div>
    </main>
  );
};

export default ProductsDashboard;
