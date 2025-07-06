import React from "react";
import Link from "next/link";
import { Button } from "@/components";

const WelcomePanel = () => {
  return (
    <div className="bg-white w-1/2">
      <div className="w-full h-full bg-themeColor rounded-l-full px-10 py-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Welcome Back!</h2>
        <p className="text-lg text-black mb-6">Already have an account?</p>
        <Link href="/login">
          <Button name="Login" type="button" />
        </Link>
      </div>
    </div>
  );
};
export { WelcomePanel };
