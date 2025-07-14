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

const PostJobView = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Step 2 Data:", data);
    if (step >= 4) {
      nextStep();
      return;
    }
    toast.success("Job posted successfully!");
    router.push("/client/dashboard");
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
            name={step === 1 ? "Next" : step === 2 ? "Continue" : "Post Job"}
            className="ml-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default PostJobView;
