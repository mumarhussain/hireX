"use client";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/services";
import Sidebar from "@/components/sidebar";

export default function ClientDashboardLayout({ children }) {
  const router = useRouter();
  const path = usePathname();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      console.error("Error during logout", err);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPath={path} onLogout={handleLogout} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
