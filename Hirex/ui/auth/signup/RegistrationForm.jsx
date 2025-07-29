"use client";
import React, { useState } from "react";
import { InputField, Button } from "@/components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import api from "@/lib/axios";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { saveUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Registered successfully!");
      console.log();
      
      saveUser(response.data);
      router.push("/login");
      setLoading(false);
    } catch (error) {
      toast.error(
        error.response.data?.message || " Error occur while Registration"
      );
      setLoading(false);
    }
  };
  const test = "Testing";
  return (
    <div className="w-1/2 bg-white px-10 py-12">
      <h1 className="text-3xl font-bold text-black mb-6">Registration</h1>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          type="text"
          placeholder="Enter name here"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <InputField
          label="Email"
          type="email"
          placeholder="Enter email here"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <InputField
          label="Password"
          type="password"
          placeholder="********"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Role
          </label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl p-4 placeholder-gray-500 focus:outline-none"
          >
            <option value="">Select a role</option>
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <Button
          name="Register"
          className="w-full mt-4"
          type="submit"
          loading={loading}
        />
      </form>
    </div>
  );
};

export { RegistrationForm };
