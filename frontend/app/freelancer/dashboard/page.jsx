// "use client";
// import { useAuth } from "@/context/authContext";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Button from "@/components/Button/Button";

// const FreelancerDashboard = () => {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push("/login");
//     } else if (user?.role !== "freelancer") {
//       router.push(user.role === "client" ? "/client/dashboard" : "/");
//     }
//   }, [user, router]);

//   return (
//     <div>
//       {user ? (
//         <div className="flex">
//           <h1>Welcome, {user.name}! This is your Freelancer Dashboard.</h1>
//           <Button
//             name={"Logout"}
//             className="bg-themeColor hover:bg-black border border-themeColor hover:border-black rounded-2xl"
//             type="button"
//           />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default FreelancerDashboard;
// app/freelancer/dashboard/page.jsx  (or pages/freelancer/dashboard.jsx)
"use client";

import { useEnsureUser } from "@/hooks/useEnsureUser";
import Button from "@/components/Button/Button";

export default function FreelancerDashboard() {
  const { user } = useEnsureUser("freelancer");

  if (!user) {
    return <p>Loading your dashboard…</p>;
  }

  return (
    <div className="px-8 py-12">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {user.name}! This is your Freelancer Dashboard.
      </h1>
      <Button
        name="Logout"
        className="bg-themeColor hover:bg-black border border-themeColor hover:border-black rounded-2xl"
        type="button"
        onClick={() => {}}
      />
    </div>
  );
}
