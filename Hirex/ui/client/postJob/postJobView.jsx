"use client";
import React, { useState } from "react";
import { StepHeader } from "./stepHeader";
import { BasicInfoStep } from "./basicInfo";
import { useForm } from "react-hook-form";
import { Button } from "@/components";
import { AddDetails } from "./AddDetails";
import { SetPreferences } from "./SetPreferences";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { postJob } from "@/lib/services";
import { useJob } from "@/context/jobPostContext";

const PostJobView = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { setPostedJob } = useJob();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const router = useRouter();

  const onSubmit = async (data) => {
    if (step === 3) {
      setLoading(true);
      try {
        const jobData = await postJob(data);
        if (jobData.success) {
          toast.success(jobData.message || "Job posted successfully!");
          setPostedJob(jobData.data);
          router.push("/client/dashboard");
        }
      } catch (error) {
        console.log("Error occur", error);
      } finally {
        setLoading(false);
      }
    }
    if (step < 3) {
      nextStep();
      return;
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <StepHeader currentStep={step} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <BasicInfoStep register={register} errors={errors} />}
        {step === 2 && <AddDetails register={register} errors={errors} />}
        {step === 3 && <SetPreferences register={register} errors={errors} />}

        <div className="mt-6 flex justify-between">
          {step <= 1 ? null : (
            <Button
              type="button"
              name="Back"
              onClick={prevStep}
              className="bg-gray-300 text-black"
            />
          )}
          <Button
            type="submit"
            name={step === 1 ? "Next" : step === 2 ? "Next" : "Post Job"}
            className="ml-auto"
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default PostJobView;
