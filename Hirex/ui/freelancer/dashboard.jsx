"use client";
import { useEnsureUser } from "@/hooks/useEnsureUser";
import { Button, Loader } from "@/components";
import { fetchCurrentUser, logout } from "@/lib/services";
import { useAuth } from "@/context/authContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const { user } = useEnsureUser("freelancer");
  const router = useRouter();
  const handleEnsureUser = async () => {
    try {
      const fetchUser = await fetchCurrentUser();
      console.log("fetchUser", fetchUser);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };
  const { saveUser } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      toast.success("Error while logging out" || err);
    } finally {
      saveUser(null);
      toast.success("Logout Successfully");
      router.replace("/login");
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
        name="Ensure User"
        className="bg-themeColor hover:bg-black border border-themeColor hover:border-black rounded-2xl"
        type="button"
        onClick={handleEnsureUser}
      />
      <Button
        name="Logout"
        className="bg-themeColor hover:bg-black border border-themeColor hover:border-black rounded-2xl"
        type="button"
        onClick={handleLogout}
      />
    </div>
  );
};

export { Dashboard };
