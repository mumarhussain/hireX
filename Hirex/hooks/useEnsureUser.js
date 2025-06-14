// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import api from "@/lib/axios";
// import { useAuth } from "@/context/authContext";
// export function useEnsureUser(requiredRole) {
//   const { user, saveUser } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     console.log(user);
//     const checkUser = async () => {
//       if (!user) {
//         try {
//           const res = await api.get("/me");
//           console.log("🚀 ~ checkUser ~ res:", res);
//           saveUser(res.data.user);
//         } catch {
//           router.push("/login");
//           return;
//         }
//       }

//       if (user && user.role !== requiredRole) {
//         const redirectMap = {
//           freelancer: "/freelancer/dashboard",
//           client: "/client/dashboard",
//         };
//         const fallback = "/";
//         router.push(redirectMap[user.role] || fallback);
//       }
//     };

//     checkUser();
//   }, [user, requiredRole, saveUser, router]);

//   return { user };
// }
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export function useEnsureUser(requiredRole) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user has been loaded and is null → not authenticated
    if (user === null) {
      router.push("/login");
      return;
    }
    
    // If user exists but wrong role → redirect appropriately
    if (user && user.role !== requiredRole) {
      const redirectMap = {
        freelancer: "/freelancer/dashboard",
        client: "/client/dashboard",
      };
      router.push(redirectMap[user.role] || "/");
    }
  }, [user, requiredRole, router]);

  return { user };
}
