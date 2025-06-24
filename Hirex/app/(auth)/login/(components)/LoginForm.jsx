"use client";
import React, { useState } from "react";
import InputField from "@/components/InputFields/InputFields";
import Button from "@/components/Button/Button";
import api from "@/lib/axios";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/authContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RedirectToDashboard } from "./RedirectToDashboard";
import { login } from "@/lib/services";
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { saveUser } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { user, message } = await login(data);
      saveUser(user);
      toast.success(message);
      RedirectToDashboard(user.role, router);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error logging in");
    } finally {
      setLoading(false);
    }
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

        <Button
          name="Login"
          className="w-full mt-4"
          type="submit"
          loading={loading}
        />
      </form>
    </div>
  );
}
