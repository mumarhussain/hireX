"use client";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/services";
import Sidebar from "@/components/sidebar";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";
export default function ClientDashboardLayout({ children }) {
  const router = useRouter();
  const path = usePathname();
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

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar currentPath={path} onLogout={handleLogout} />
      <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
    </div>
  );
}
