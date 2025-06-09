"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputFields";
import Button from "@/components/Button/Button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="w-1/2 bg-white px-10 py-12">
      <h1 className="text-3xl font-bold text-black mb-6">Login</h1>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          type="email"
          placeholder="Enter email here"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <InputField
          label="Password"
          type="password"
          placeholder="********"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Button name="Login" className="w-full mt-4" type="submit" />
      </form>
    </div>
  );
}
