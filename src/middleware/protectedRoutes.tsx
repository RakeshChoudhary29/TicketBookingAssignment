// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem("token"); // You can replace this with your auth logic

  console.log({ token });

    return token ? <Outlet /> : <Navigate to="/login" replace />;
  // return <Outlet />;
};

export default ProtectedRoute;
