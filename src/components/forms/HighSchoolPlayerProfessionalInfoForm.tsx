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
  highSchoolPlayerProfessionalInfoSchema,
  THighSchoolPlayerProfessionalInfo,
} from "@/shchemas/profileValidation";

interface IHighSchoolPlayerProfessionalInfoFormProps {
  onNext: (data: THighSchoolPlayerProfessionalInfo) => void;
  onPrev: () => void;
  initialData?: Partial<THighSchoolPlayerProfessionalInfo>;
  steps?: Array<{
    id: number;
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
}

export function HighSchoolPlayerProfessionalInfoForm({
  onNext,
  onPrev,
  initialData,
  steps,
}: IHighSchoolPlayerProfessionalInfoFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<THighSchoolPlayerProfessionalInfo>({
    resolver: zodResolver(highSchoolPlayerProfessionalInfoSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  const onSubmit = (data: THighSchoolPlayerProfessionalInfo) => {
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
                  <SelectItem value="now">Now</SelectItem>
                  <SelectItem value="later">Later</SelectItem>
                  <SelectItem value="soon">Soon</SelectItem>
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

            <FormField label="Current Club" error={errors.currentClub?.message}>
              <Input
                {...register("currentClub")}
                placeholder="Ex. Real Madrid"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="Social Media" error={errors.socialMedia?.message}>
              <Input
                {...register("socialMedia")}
                placeholder="Social Media"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="Category" error={errors.category?.message}>
              <Select onValueChange={(value) => setValue("category", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select your category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="U10">U10</SelectItem>
                  <SelectItem value="U11">U11</SelectItem>
                  <SelectItem value="U12">U12</SelectItem>
                  <SelectItem value="U13">U13</SelectItem>
                  <SelectItem value="U14">U14</SelectItem>
                  <SelectItem value="U15">U15</SelectItem>
                  <SelectItem value="U16">U16</SelectItem>
                  <SelectItem value="U17">U17</SelectItem>
                  <SelectItem value="U18">U18</SelectItem>
                  <SelectItem value="U19">U19</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Foot" error={errors.foot?.message}>
              <Select onValueChange={(value) => setValue("foot", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Foot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="right">Right</SelectItem>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Position" error={errors.position?.message}>
              <Select onValueChange={(value) => setValue("position", value)}>
                <SelectTrigger className="bg-gray-50 border-0 w-full">
                  <SelectValue placeholder="Select your position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GK">GK</SelectItem>
                  <SelectItem value="central back">Central back</SelectItem>
                  <SelectItem value="left back">Left back</SelectItem>
                  <SelectItem value="right back">Right back</SelectItem>
                  <SelectItem value="defensive midfielder">
                    Defensive midfielder
                  </SelectItem>
                  <SelectItem value="offensive midfielder">
                    Offensive midfielder
                  </SelectItem>
                  <SelectItem value="right winger">Right winger</SelectItem>
                  <SelectItem value="left winger">Left winger</SelectItem>
                  <SelectItem value="forward">Forward</SelectItem>
                  <SelectItem value="striker">Striker</SelectItem>
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

            <FormField label="Agent" error={errors.agent?.message}>
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

            <FormField label="School Name" error={errors.schoolName?.message}>
              <Input
                {...register("schoolName")}
                placeholder="Write your school name"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="SAT/ACT (if applicable)" error={errors.schoolName?.message}>
              <Input
                {...register("satOrAct")}
                placeholder="Write your diploma name"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="GPA (if applicable)" error={errors.schoolName?.message}>
              <Input
                {...register("gpa")}
                placeholder="Write your gpa"
                className="bg-gray-50 border-0"
              />
            </FormField>
          </div>
        </FormSection>
      </form>
    </FormLayout>
  );
}
