// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />; // إعادة التوجيه للصفحة الرئيسية إذا لم يكن المستخدم مصرح له
  }
  return children;
}

export default ProtectedRoute;
