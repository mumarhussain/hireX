"use client";

import { useEnsureUser } from "@/hooks/useEnsureUser";
import Button from "@/components/Button/Button";

export default function FreelancerDashboard() {
  const { user } = useEnsureUser("freelancer");

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
        onClick={() => {}}
      />
    </div>
  );
}
