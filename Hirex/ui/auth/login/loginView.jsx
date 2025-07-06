import LoginForm from "@/ui/auth/login/LoginForm";
import LoginWelcomePanel from "@/ui/auth/login/LoginWelcomePanel";

const LoginView = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 font-poppins">
      <div className="w-full max-w-4xl flex rounded-[50px] overflow-hidden my-20">
        <LoginForm />
        <LoginWelcomePanel
          heading="Welcome Back!"
          description="Do not have an account?"
          buttonText="Register"
          linkHref="/signup"
        />
      </div>
    </div>
  );
};
export { LoginView };
