"use client";
import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [postedJob, setPostedJob] = useState(null);

  return (
    <JobContext.Provider value={{ postedJob, setPostedJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
