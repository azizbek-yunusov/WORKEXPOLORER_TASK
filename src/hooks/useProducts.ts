import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductsProvider");
  return ctx;
};
