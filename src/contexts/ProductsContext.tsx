import  { createContext, useState, useEffect, type ReactNode } from "react";

const API_URL = "https://api.restful-api.dev/objects";

interface Product {
  id: string;
  name: string;
  data: {
    price: number;
    color: string;
    category: string;
  };
}

interface ProductsContextType {
  products: Product[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
  getProduct: (id: string) => Promise<Product>;
  createProduct: (product: Omit<Product, "id">) => Promise<Product>;
  updateProduct: (id: string, product: Omit<Product, "id">) => Promise<Product>;
  deleteProduct: (id: string) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  const getProduct = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
  };

  const createProduct = async (product: Omit<Product, "id">) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const newProd = await res.json();
    setProducts((prev) => [...prev, newProd]);
    return newProd;
  };

  const updateProduct = async (id: string, product: Omit<Product, "id">) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const updated = await res.json();
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
    return updated;
  };

  const deleteProduct = async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
