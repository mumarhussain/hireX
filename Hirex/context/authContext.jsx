"use client";
import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveUser = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
