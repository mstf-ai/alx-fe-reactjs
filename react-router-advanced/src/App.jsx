import Profile from "./components/Profile";

// داخل Routes
<Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={true}>
      <Profile />
    </ProtectedRoute>
  }
/>
