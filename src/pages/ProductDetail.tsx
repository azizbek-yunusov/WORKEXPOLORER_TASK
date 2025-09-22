import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Header } from "../components/Header";
import FullProductInfo from "../components/FullProductInfo";
import { useProducts } from "../hooks/useProducts";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProduct } = useProducts();

  useEffect(() => {
    getProduct(id?.toString() || "");
  }, [getProduct, id]);

  return (
    <main className="min-h-screen">
      <div className="border-b border-gray-200 shadow-md py-8">
        <div className="container-full">
          <Header />
        </div>
      </div>
      <div className="container-full bg-gray-100 py-8 ">
        <ProductCard />
        <FullProductInfo />
      </div>
    </main>
  );
};

export default ProductDetail;
