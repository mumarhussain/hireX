import React from "react";
import { InputField } from "@/components";

const BasicInfoStep = ({ register, errors }) => {
  return (
    <div className=" space-y-4">
      <InputField
        label="Job Title"
        placeholder="Full Stack Developer"
        {...register("title", { required: "Job title is required" })}
      />
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      <InputField
        label="Category"
        placeholder="Web Development"
        {...register("category", { required: "Category is required" })}
      />
      {errors.category && (
        <p className="text-red-500 text-sm">{errors.category.message}</p>
      )}

      <InputField
        label="Location"
        placeholder="Remote or Faisalabad"
        {...register("location", { required: "Location is required" })}
      />
      {errors.location && (
        <p className="text-red-500 text-sm">{errors.location.message}</p>
      )}
    </div>
  );
};

export { BasicInfoStep };
