import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";
import toast from "react-hot-toast";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  if (!user) {
    toast.error("You are not authorized to access this page");
    return <Navigate to="/login" replace />;
  }

  return children;
};
