import React from "react";

const SetPreferences = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Budget ($)
        </label>
        <input
          type="number"
          placeholder="e.g. 500"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor"
          {...register("budget", { required: "Budget is required" })}
        />
        {errors.budget && (
          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Duration
        </label>
        <select
          {...register("duration", { required: "Please select a duration" })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor"
        >
          <option value="">Select duration</option>
          <option value="1-2 weeks">1–2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="3+ months">3+ months</option>
        </select>
        {errors.duration && (
          <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Type
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              value="fixed"
              {...register("jobType", { required: "Select a job type" })}
              className="accent-themeColor"
            />
            Fixed Price
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              value="hourly"
              {...register("jobType")}
              className="accent-themeColor"
            />
            Hourly
          </label>
        </div>
        {errors.jobType && (
          <p className="text-red-500 text-sm mt-1">{errors.jobType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Visibility
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              value="public"
              {...register("visibility", {
                required: "Select visibility",
              })}
              className="accent-themeColor"
            />
            Public
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              value="private"
              {...register("visibility")}
              className="accent-themeColor"
            />
            Private
          </label>
        </div>
        {errors.visibility && (
          <p className="text-red-500 text-sm mt-1">
            {errors.visibility.message}
          </p>
        )}
      </div>
    </div>
  );
};

export { SetPreferences };
