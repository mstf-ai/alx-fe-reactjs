// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = true; // مؤقت للتجربة

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected and nested route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
