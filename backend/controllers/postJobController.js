import { sendServerError, sendSuccess } from "../utils/response.js";
import { PostJob } from "./../models/postJobModel.js";

export const postJob = async (req, res) => {
  try {
    const jobData = req.body.data;

    if (typeof jobData.skills === "string") {
      jobData.skills = jobData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const newJob = new PostJob(jobData);
    await newJob.save();

    console.log(newJob, "newJob data");

    // 2) Return the saved doc
    return sendSuccess(res, "Job Posted Successfully", { newJob });
  } catch (error) {
    console.error("Error in postJob:", error);
    return sendServerError(res, "Error occurred while posting job.");
  }
};
