import React from "react";
import { InputField } from "@/components";

const BasicInfoStep = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <InputField
        label="Job Title"
        placeholder="e.g. Full Stack Developer"
        {...register("title", { required: "Job title is required" })}
      />
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      <InputField
        label="Category"
        placeholder="e.g. Web Development"
        {...register("category", { required: "Category is required" })}
      />
      {errors.category && (
        <p className="text-red-500 text-sm">{errors.category.message}</p>
      )}

      <InputField
        label="Location"
        placeholder="e.g. Remote or Lahore"
        {...register("location")}
      />
    </div>
  );
};

export { BasicInfoStep };
