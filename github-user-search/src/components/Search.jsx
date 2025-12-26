import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onSearch(username.trim());
    setUsername("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
            flex-1
            px-4
            py-2
            border
            border-gray-300
            rounded-lg
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        <button
          type="submit"
          className="
            px-5
            py-2
            bg-black
            text-white
            rounded-lg
            hover:bg-gray-800
            transition
          "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
