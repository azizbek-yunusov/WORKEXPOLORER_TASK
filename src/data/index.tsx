import { ProtectedRoute } from "../components/ProtectedRoute";
import {
  CreateProduct,
  EditProduct,
  ProductDetail,
  ProductsDashboard,
  RegisterPage,
  SignIn,
} from "../pages";

export const routes = [
  { path: "/", element: <SignIn /> },
  { path: "/login", element: <SignIn /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <ProductsDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/new",
    element: (
      <ProtectedRoute>
        <CreateProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id/edit",
    element: (
      <ProtectedRoute>
        <EditProduct />
      </ProtectedRoute>
    ),
  },
];


export const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports", "Beauty & Health", "Toys", "Furniture", "Jewelry", "Others"]
export const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White", "Pink", "Purple", "Orange", "Brown"]