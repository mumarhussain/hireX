"use client";
import { useEnsureUser } from "@/hooks/useEnsureUser";
import Button from "@/components/Button/Button";
import Loader from "@/components/Loader/loader";
import { logout } from "@/lib/services";

export default function FreelancerDashboard() {
  const { user } = useEnsureUser("freelancer");

  const handleEnsureUser = async () => {
    try {
      const logout = await logout();
      console.log("Logged Out", logout);
    } catch (err) {
      console.error("Error logging out user:", err);
    }
  };
  if (!user) {
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Loader size={40} />
    </div>;
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
