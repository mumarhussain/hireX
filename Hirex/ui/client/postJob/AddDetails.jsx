import { InputField } from "@/components";
import React from "react";

const AddDetails = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea
          rows={6}
          placeholder="Describe the responsibilities, skills, and expectations for this job..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-themeColor"
          {...register("description", {
            required: "Job description is required",
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <InputField
          label="Required Skills"
          placeholder=" React, Node.js, MongoDB"
          {...register("skills", { required: "Please add require skills." })}
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.skills.message}</p>
        )}
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
          className="block w-full text-sm text-gray-600
                     file:mr-4 file:py-2 file:px-4 file:rounded-md
                     file:border-0 file:text-sm file:font-semibold
                     file:bg-themeColor file:text-white hover:file:bg-lime-600"
          {...register("attachments")}
        />
      </div>
    </div>
  );
};

export { AddDetails };
