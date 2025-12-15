import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Mostafa",
    email: "mostafa@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
