"use client";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const MyJobs = () => {
  const jobs = [
    {
      title: "Web Redesign",
      datePosted: "July 25, 2025",
      status: "Active",
      proposals: 4,
    },
    {
      title: "Landing Page",
      datePosted: "July 22, 2025",
      status: "Paused",
      proposals: 2,
    },
    {
      title: "Mobile App",
      datePosted: "July 18, 2025",
      status: "Completed",
      proposals: 6,
    },
  ];

  return (
    <div className="p-6 bg-[#f6faff] min-h-screen">
      <h2 className="text-2xl font-semibold text-black mb-6">My Jobs</h2>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full table-auto text-left">
          <thead className="bg-[#AED264] text-black text-sm uppercase">
            <tr>
              <th className="p-4">Job Title</th>
              <th className="p-4">Date Posted</th>
              <th className="p-4">Status</th>
              <th className="p-4">Proposals</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-all"
              >
                <td className="p-4 font-medium">{job.title}</td>
                <td className="p-4">{job.datePosted}</td>
                <td className="p-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : job.status === "Paused"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="p-4">{job.proposals}</td>
                <td className="p-4">
                  <button className="text-gray-600 hover:text-black transition">
                    <FiMoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MyJobs };
