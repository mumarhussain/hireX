"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export function useEnsureUser(requiredRole) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    } else if (user && user.role !== requiredRole) {
      router.push(user.role === "client" ? "/client/dashboard" : "/");
    }
  }, [user, requiredRole, router]);

  return { user };
}
