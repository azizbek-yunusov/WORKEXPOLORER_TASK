// src/contexts/AppProvider.tsx
import type { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ProductsProvider } from "./ProductsContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};
