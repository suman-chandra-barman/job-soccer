"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLayout } from "@/components/form/FormLayout";
import { FormSection } from "@/components/form/FormSection";
import { FormField } from "@/components/form/fields/FormField";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  professionalInfoSchema,
  type ProfessionalInfo,
} from "@/shchemas/profileValidation";

interface IProfessionalInfoFormProps {
  onNext: (data: ProfessionalInfo) => void;
  onPrev: () => void;
  initialData?: Partial<ProfessionalInfo>;
  steps?: Array<{
    id: number;
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
}

export function ProfessionalInfoForm({
  onNext,
  onPrev,
  initialData,
  steps,
}: IProfessionalInfoFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<ProfessionalInfo>({
    resolver: zodResolver(professionalInfoSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  const onSubmit = (data: ProfessionalInfo) => {
    onNext(data);
  };

  return (
    <FormLayout
      steps={steps}
      onNext={handleSubmit(onSubmit)}
      onPrev={onPrev}
      showPrev={true}
      isNextDisabled={!isValid}
    >
      <form className="space-y-8">
        <FormSection title="Professional Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Gender" error={errors.gender?.message}>
              <Select onValueChange={(value) => setValue("gender", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              label="Availability"
              error={errors.availability?.message}
            >
              <Select
                onValueChange={(value) => setValue("availability", value)}
              >
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="unavailable">Unavailable</SelectItem>
                  <SelectItem value="partially">Partially Available</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Height" error={errors.height?.message}>
              <div className="flex space-x-2">
                <Input
                  {...register("height")}
                  placeholder="Ex. 5.7"
                  className="bg-gray-50 border-0"
                />
                <Select defaultValue="ft">
                  <SelectTrigger className="w-20 bg-gray-50 border-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ft">ft</SelectItem>
                    <SelectItem value="cm">cm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </FormField>

            <FormField label="Weight" error={errors.weight?.message}>
              <div className="flex space-x-2">
                <Input
                  {...register("weight")}
                  placeholder="Ex. 75"
                  className="bg-gray-50 border-0"
                />
                <Select defaultValue="kg">
                  <SelectTrigger className="w-20 bg-gray-50 border-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">kg</SelectItem>
                    <SelectItem value="lbs">lbs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </FormField>

            <FormField
              label="Current club"
              error={errors.currentClub?.message}
              className="md:col-span-2"
            >
              <Input
                {...register("currentClub")}
                placeholder="Ex. Real Madrid"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="Category" error={errors.category?.message}>
              <Select onValueChange={(value) => setValue("category", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select your category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="youth">Youth</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                  <SelectItem value="veteran">Veteran</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Pool" error={errors.pool?.message}>
              <Select onValueChange={(value) => setValue("pool", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Pool" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pool-a">Pool A</SelectItem>
                  <SelectItem value="pool-b">Pool B</SelectItem>
                  <SelectItem value="pool-c">Pool C</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Position" error={errors.position?.message}>
              <Select onValueChange={(value) => setValue("position", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select your position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
                  <SelectItem value="defender">Defender</SelectItem>
                  <SelectItem value="midfielder">Midfielder</SelectItem>
                  <SelectItem value="forward">Forward</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="League" error={errors.league?.message}>
              <Select onValueChange={(value) => setValue("league", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select League" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="premier">Premier League</SelectItem>
                  <SelectItem value="championship">Championship</SelectItem>
                  <SelectItem value="league-one">League One</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              label="Agent"
              error={errors.agent?.message}
              className="md:col-span-2"
            >
              <Select onValueChange={(value) => setValue("agent", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select your answer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              label="Social Media"
              error={errors.socialMedia?.message}
              className="md:col-span-2"
            >
              <Input
                {...register("socialMedia")}
                placeholder="Social Media"
                className="bg-gray-50 border-0"
              />
            </FormField>
          </div>
        </FormSection>
      </form>
    </FormLayout>
  );
}
