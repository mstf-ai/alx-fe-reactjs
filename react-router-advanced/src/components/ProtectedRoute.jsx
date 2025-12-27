// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

/* simple mock auth hook */
function useAuth() {
  return {
    isAuthenticated: true, // change to false to test redirect
  };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
