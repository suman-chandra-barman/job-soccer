"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("mah....@gmail.com");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSendCode = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Verification code sent!", {
        description: "Please check your email for the verification code.",
      });
      // Navigate to create new password page
      router.push("/email-verification");
    } catch (error) {
      toast.error("Failed to send code", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Yellow background with text */}
      <div className="hidden md:flex flex-1 items-center justify-center px-2 md:px-5 lg:px-8 bg-primary">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-[#010A18] leading-tight mb-4">
            Reset Your Password for the Football Career Hub
          </h2>
          <p className="text-[#837E5B] mt-1">
            Don&#39;t worry! We&#39;re here to help you get back into your account.
          </p>
        </div>
      </div>

      {/* Right side - Reset form */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Forgot password
            </h2>
            <p className="text-gray-600">
              Enter your registered email to reset your password.
            </p>
          </div>

          {/* Email Display */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Reset via Email
                </p>
                <p className="text-sm text-gray-600">
                  Get a verification code at {email}
                </p>
              </div>
            </div>
          </div>

          {/* Send Code Button */}
          <Button
            onClick={handleSendCode}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-amber-300 text-black font-medium py-3 rounded-md cursor-pointer"
          >
            {isLoading ? <Spinner /> : "Send Code"}
          </Button>
        </div>
      </div>
    </div>
  );
}
