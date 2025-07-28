"use client";

import React, { useState } from "react";
import { PersonalInfoForm } from "@/components/forms/PersonalInfoForm";
import { ProfessionalInfoForm } from "@/components/forms/ProfessionalInfoForm";
import { HighlightsForm } from "@/components/forms/HighlightsForm";
import { toast } from "sonner";
import type {
  PersonalInfo,
  ProfessionalInfo,
  Highlights,
} from "@/shchemas/profileValidation";
import { useRouter } from "next/navigation";

export default function CompleteProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    personalInfo?: PersonalInfo;
    professionalInfo?: ProfessionalInfo;
    highlights?: Highlights;
  }>({});

  const router = useRouter();

  const steps = [
    {
      id: 1,
      label: "Step 1",
      completed: currentStep > 1,
      active: currentStep === 1,
    },
    {
      id: 2,
      label: "Step 2",
      completed: currentStep > 2,
      active: currentStep === 2,
    },
    {
      id: 3,
      label: "Step 3",
      completed: currentStep > 3,
      active: currentStep === 3,
    },
  ];

  const handlePersonalInfoNext = (data: PersonalInfo) => {
    setFormData((prev) => ({ ...prev, personalInfo: data }));
    setCurrentStep(2);
    toast.success("Personal information saved successfully!");
  };

  const handleProfessionalInfoNext = (data: ProfessionalInfo) => {
    setFormData((prev) => ({ ...prev, professionalInfo: data }));
    setCurrentStep(3);
    toast.success("Professional information saved successfully!");
  };

  const handleHighlightsNext = (data: Highlights) => {
    setFormData((prev) => ({ ...prev, highlights: data }));
    // Here you would typically submit the complete form data to your API
    console.log("Complete form data:", { ...formData, highlights: data });
    toast.success("Profile completed successfully!");
    // Redirect to home page
    router.push("/");
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <div>
      {currentStep === 1 && (
        <PersonalInfoForm
          onNext={handlePersonalInfoNext}
          initialData={formData.personalInfo}
          steps={steps}
        />
      )}

      {currentStep === 2 && (
        <ProfessionalInfoForm
          onNext={handleProfessionalInfoNext}
          onPrev={handlePrevStep}
          initialData={formData.professionalInfo}
          steps={steps}
        />
      )}

      {currentStep === 3 && (
        <HighlightsForm
          onNext={handleHighlightsNext}
          onPrev={handlePrevStep}
          initialData={formData.highlights}
          steps={steps}
        />
      )}
    </div>
  );
}
