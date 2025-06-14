"use client";

import { useEnsureUser } from "@/hooks/useEnsureUser";
import Button from "@/components/Button/Button";
import api from "@/lib/axios";

export default function FreelancerDashboard() {
  const { user } = useEnsureUser("freelancer");

  const handleEnsureUser = async () => {
    console.log("clicked");
    try {
      const res = await api.get("/me"); // withCredentials set by your axios instance
      console.log("checkUser", res);
    } catch (err) {
      console.error("Error fetching /me:", err);
    }
  };
  if (!user) {
    <p>Loading your dashboard…</p>;
    console.log("No User Found");
  }

  return (
    <div className="px-8 py-12">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {user?.name}! This is your Freelancer Dashboard.
      </h1>
      <Button
        name="Logout"
        className="bg-themeColor hover:bg-black border border-themeColor hover:border-black rounded-2xl"
        type="button"
        onClick={handleEnsureUser}
      />
    </div>
  );
}
