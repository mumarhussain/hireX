"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCurrentUser, logout } from "@/lib/services";
import { Loader } from "@/components";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCurrentUser();
        setUser(res);
      } catch {
        setUser(null);
      } finally {
        setInitialized(true);
      }
    })();
  }, []);

  const saveUser = (userData) => setUser(userData);

  const logoutUser = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Error during logout", err);
    } finally {
      setUser(null);
      router.push("/login");
    }
  };
  if (!initialized)
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <Loader size={40} />
      </div>
    );

  return (
    <AuthContext.Provider value={{ user, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
