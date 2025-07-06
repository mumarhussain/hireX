"use client";
import RegistrationForm from "../../../ui/auth/signup/RegistrationForm";
import WelcomePanel from "../../../ui/auth/signup/WelcomePanel";

function RegistrationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 font-poppins">
      <div className="w-full max-w-4xl flex rounded-[50px] overflow-hidden my-20">
        <RegistrationForm />
        <WelcomePanel />
      </div>
    </div>
  );
}
export default RegistrationPage;
