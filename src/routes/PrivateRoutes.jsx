import React, { useContext } from "react";
import { UserContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="flex items-center h-screen w-96 mx-auto">
        <progress className="progress mx-auto"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;