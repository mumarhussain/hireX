"use client";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Sidebar from "@/components/client/sidebar";

export default function ClientLayout({ children }) {
  const router = useRouter();
  const { logout } = useAuth();
  const path = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex">
      <Sidebar currentPath={path} onLogout={handleLogout} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
