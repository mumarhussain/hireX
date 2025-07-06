"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

export default function LoginWelcomePanel({
  heading,
  description,
  buttonText,
  linkHref,
}) {
  return (
    <div className="bg-white w-1/2">
      <div className="w-full h-full bg-themeColor rounded-l-full px-10 py-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-black mb-4">{heading}</h2>
        <p className="text-lg text-black mb-6">{description}</p>
        <Link href={linkHref}>
          <Button name={buttonText} />
        </Link>
      </div>
    </div>
  );
}
