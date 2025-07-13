import { RegistrationForm } from "./RegistrationForm";
import { WelcomePanel } from "./WelcomePanel";
const SignupView = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 font-poppins">
      <div className="w-full max-w-4xl flex rounded-[50px] overflow-hidden my-20">
        <RegistrationForm />
        <WelcomePanel />
      </div>
    </div>
  );
};
export default SignupView;

