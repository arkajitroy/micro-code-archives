import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WithAuth(WrappedComponent: React.FC) {
  return function WithAuth(props: any) {
    const navigate = useNavigate();
    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) navigate("/");
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <WrappedComponent {...props} /> : <h3>Redirecting...</h3>;
  };
}
