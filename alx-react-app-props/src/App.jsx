import UserContext from "./context/UserContext";
import UserProfile from "./UserProfile";

function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
