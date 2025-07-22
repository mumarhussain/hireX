"use client";
import React, { useEffect } from "react";
import {
  Briefcase,
  FileText,
  MessageCircle,
  User,
  Home as HomeIcon,
} from "lucide-react";
import { useEnsureUser } from "@/hooks/useEnsureUser";
import { useRouter } from "next/navigation";
import { fetchCurrentUser } from "@/lib/services";
import Link from "next/link";

const HomeView = () => {
  const { user } = useEnsureUser("client");
  const router = useRouter();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const fetchUser = await fetchCurrentUser();
        console.log("fetchUser", fetchUser);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    loadProfile();
  }, [router]);

  if (!user) {
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Loader size={40} />
    </div>;
  }

  const metrics = [
    { label: "Active Jobs", value: 3, icon: Briefcase },
    { label: "New Proposals", value: 7, icon: MessageCircle },
    { label: "Budget Spent", value: "$1,200", icon: FileText },
    { label: "Avg. Response", value: "2h 15m", icon: User },
  ];

  const proposals = [
    { freelancer: "Alice", bid: "$500", job: "Web Redesign" },
    { freelancer: "Bob", bid: "$300", job: "Mobile App" },
    { freelancer: "Cara", bid: "$450", job: "Landing Page" },
  ];

  const quickActions = [
    {
      label: "Post a New Job",
      icon: Briefcase,
      href: "/client/dashboard/post-job",
    },
    { label: "My Jobs", icon: FileText, href: "/client/dashboard/my-jobs" },
    {
      label: "Review Proposals",
      icon: MessageCircle,
      href: "/client/dashboard/proposals",
    },
  ];

  const tips = [
    "Include clear deliverables and deadlines.",
    "Ask for a brief portfolio to gauge quality.",
    "Respond promptly to keep top talent engaged.",
  ];

  return (
    <div className="p-8 bg-blue-100/80 rounded-4xl min-h-screen text-black space-y-12">
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-2xl"
          >
            <div className="p-3 bg-themeColor bg-opacity-20 rounded-full">
              <Icon size={24} className="text-black" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Proposals */}
      <div className="bg-white bg-opacity-10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-black mb-4">
          Recent Proposals
        </h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Freelancer</th>
              <th className="py-2">Bid</th>
              <th className="py-2">Job</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {proposals.map(({ freelancer, bid, job }, idx) => (
              <tr key={idx} className="border-b border-gray-700">
                <td className="py-3">{freelancer}</td>
                <td className="py-3">{bid}</td>
                <td className="py-3">{job}</td>
                <td className="py-3">
                  <a href="#" className="text-black hover:underline text-sm">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {quickActions.map(({ label, icon: Icon, href }) => (
          <Link key={href} href={href} className="block">
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-2xl hover:bg-opacity-20 transition">
              <div className="p-4 bg-themeColor bg-opacity-20 rounded-full mb-4">
                <Icon size={28} className="text-black" />
              </div>
              <span className="text-lg font-medium text-black">{label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-white bg-opacity-10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-black mb-4">
          Tips for Better Proposals
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HomeView;
