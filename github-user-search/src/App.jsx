import Search from "./components/Search";

function App() {
  const handleSearch = (username) => {
    console.log("Searching for:", username);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
