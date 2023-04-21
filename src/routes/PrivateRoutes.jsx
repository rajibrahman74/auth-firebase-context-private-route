import React, { useContext } from "react";
import { UserContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading} = useContext(UserContext);

  if(loading) {
    return <progress className="progress w-56 mx-auto"></progress>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;