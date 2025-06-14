// "use client";
// import { useContext, createContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const saveUser = (userData) => {
//     setUser(userData);
//   };

//   return (
//     <AuthContext.Provider value={{ user, saveUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();

  // On mount, try to fetch the current user
  // useEffect(() => {
  // const fetchUser = async () => {
  //   try {
  //       const res = await api.get("/me"); // proxy or direct withCredentials
  //       setUser(res.data.user); // hydrate context
  //     } catch {
  //       setUser(null); // not logged in
  // } finally {
  //   setInitialized(true);
  // }
  //   };
  //   fetchUser();
  // }, []);

  useEffect(() => {
    api
      .get("/me", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setInitialized(true));
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    await api.post("/logout");
    setUser(null);
    router.push("/login");
  };

  // Don't render children until we've tried to load the user
  if (!initialized) {
    return <div>Loading authentication…</div>;
  }

  return (
    <AuthContext.Provider value={{ user, saveUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
