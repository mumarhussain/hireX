import React from "react";

const AddDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea
          rows={6}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor"
          placeholder="Describe the responsibilities, skills, and expectations for this job..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Required Skills
        </label>
        <input
          type="text"
          placeholder="e.g. React, Node.js, MongoDB"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor"
        />
        <p className="text-xs text-gray-400 mt-1">
          Separate skills with commas.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Attachments (Optional)
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-themeColor file:text-white hover:file:bg-lime-600"
        />
      </div>
    </div>
  );
};

export { AddDetails };
