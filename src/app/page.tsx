import { AuthLayout } from "@/src/components/auth/AuthLayout";
import { RegisterForm } from "@/src/components/auth/RegisterForm";

export default function Home() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}