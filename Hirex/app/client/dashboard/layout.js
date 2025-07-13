"use client";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Sidebar from "@/components/sidebar";

export default function ClientDashboardLayout({ children }) {
  const router = useRouter();
  const { logout } = useAuth();
  const path = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPath={path} onLogout={handleLogout} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
