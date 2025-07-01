import React from "react";
import Link from "next/link";
import {
  Home,
  Briefcase,
  FileText,
  MessageCircle,
  User,
  LogOut,
} from "lucide-react";

const tabs = [
  { label: "Dashboard", href: "/client/dashboard", icon: Home },
  { label: "Post Job", href: "/client/dashboard/post-job", icon: Briefcase },
  { label: "My Jobs", href: "/client/dashboard/my-jobs", icon: FileText },
  {
    label: "Proposals",
    href: "/client/dashboard/proposals",
    icon: MessageCircle,
  },
  { label: "Profile", href: "/client/dashboard/profile", icon: User },
];

export default function Sidebar({ currentPath, onLogout }) {
  return (
    <aside className="w-64 bg-black rounded-tr-4xl rounded-br-4xl text-white min-h-screen py-10 flex flex-col justify-between">
      {/* Top: Tabs */}
      <nav className="space-y-4">
        {tabs.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 ${
              currentPath === href ? "bg-gray-800" : ""
            }`}
          >
            <Icon size={20} className="text-themeColor" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={onLogout}
        className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800 w-full"
      >
        <LogOut size={25} className="text-red-500" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
}
