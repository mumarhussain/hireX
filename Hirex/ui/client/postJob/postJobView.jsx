"use client";
import React, { useState } from "react";
import { StepHeader } from "./stepHeader";
import { BasicInfoStep } from "./basicInfo";
import { useForm } from "react-hook-form";
import { Button } from "@/components";
import { AddDetails } from "./AddDetails";
import { SetPreferences } from "./SetPreferences";

const PostJobView = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Step 1 Data:", data);
    nextStep();
  };
  return (
    <div className="max-w-3xl mx-auto">
      <StepHeader currentStep={step} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <BasicInfoStep register={register} errors={errors} />}
        {step === 2 && <AddDetails />}
        {step === 3 && <SetPreferences />}

        <div className="mt-6 flex justify-between">
          {step > 0 && (
            <Button
              type="button"
              name="Back"
              onClick={prevStep}
              className="bg-gray-300 text-black"
            />
          )}
          <Button
            type="submit"
            name={step === 0 ? "Next" : "Continue"}
            className="ml-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default PostJobView;
