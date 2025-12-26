import { useState } from "react";
import SearchForm from "./components/SearchForm";
import { searchUsers } from "./services/githubApi";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchForm onSearch={handleSearch} />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
