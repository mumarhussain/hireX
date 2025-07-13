import React from "react";

const SetPreferences = () => {
  return (
    <div className="space-y-6">
      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Budget ($)
        </label>
        <input
          type="number"
          placeholder="e.g. 500"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor"
        />
        <p className="text-xs text-gray-400 mt-1">
          Set the estimated budget for this job.
        </p>
      </div>

      {/* Project Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Duration
        </label>
        <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor">
          <option value="">Select duration</option>
          <option value="1-2 weeks">1–2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="3+ months">3+ months</option>
        </select>
      </div>

      {/* Job Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Type
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="jobType"
              value="fixed"
              className="accent-themeColor"
            />
            Fixed Price
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="jobType"
              value="hourly"
              className="accent-themeColor"
            />
            Hourly
          </label>
        </div>
      </div>

      {/* Visibility */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Visibility
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="visibility"
              value="public"
              className="accent-themeColor"
            />
            Public
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="visibility"
              value="private"
              className="accent-themeColor"
            />
            Private
          </label>
        </div>
      </div>
    </div>
  );
};

export { SetPreferences };
