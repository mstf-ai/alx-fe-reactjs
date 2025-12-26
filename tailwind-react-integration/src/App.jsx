// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Home />
      </main>
    </div>
  );
}

export default App;
