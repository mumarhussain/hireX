import mongoose from "mongoose";

const postJob = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: [String], // Converted from comma-separated string if needed
      required: true,
    },
    attachments: {
      type: Object, // Adjust this based on how you handle uploads
      default: {},
    },
    budget: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["fixed", "hourly"],
      required: true,
    },
    visibility: {
      type: String,
      enum: ["public", "private"],
      required: true,
    },
  },
  { timestamps: true }
);

export const PostJob = mongoose.model("PostJob", postJob);
