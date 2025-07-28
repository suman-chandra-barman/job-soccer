"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLayout } from "@/components/form/FormLayout";
import { FormSection } from "@/components/form/FormSection";
import { FormField } from "@/components/form/fields/FormField";
import { ImageUpload } from "@/components/form/fields/ImageUpload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  personalInfoSchema,
  type PersonalInfo,
} from "@/shchemas/profileValidation";

interface IPersonalInfoFormProps {
  onNext: (data: PersonalInfo) => void;
  initialData?: Partial<PersonalInfo>;
  steps?: Array<{
    id: number;
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
}

export function PersonalInfoForm({
  onNext,
  initialData,
  steps,
}: IPersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  const imageValue = watch("image");

  const onSubmit = (data: PersonalInfo) => {
    onNext(data);
  };

  return (
    <FormLayout
      steps={steps}
      onNext={handleSubmit(onSubmit)}
      isNextDisabled={!isValid}
    >
      <form className="space-y-8">
        <FormSection title="Personal Information">
          <div className="flex justify-start mb-6">
            <FormField error={errors.image?.message}>
              <ImageUpload
                value={imageValue}
                onChange={(file) => setValue("image", file || undefined)}
                placeholder="Upload your image"
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="First Name" error={errors.firstName?.message}>
              <Input
                {...register("firstName")}
                placeholder="John"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="Last Name" error={errors.lastName?.message}>
              <Input
                {...register("lastName")}
                placeholder="Doe"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField
              label="Date of birth"
              error={errors.dateOfBirth?.message}
            >
              <Input
                {...register("dateOfBirth")}
                type="date"
                className="bg-gray-50 border-0 flex-col"
              />
            </FormField>

            <FormField
              label="Place Of Birth"
              error={errors.placeOfBirth?.message}
            >
              <Input
                {...register("placeOfBirth")}
                placeholder="New York"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="Nationality" error={errors.nationality?.message}>
              <Input
                {...register("nationality")}
                placeholder="Ex. American"
                className="bg-gray-50 border-0"
              />
            </FormField>

            <FormField label="Phone number" error={errors.phoneNumber?.message}>
              <div className="flex">
                <Select defaultValue="+1">
                  <SelectTrigger className="w-30 bg-gray-50 border-0 rounded-r-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">+1 (USA/Canada)</SelectItem>
                    <SelectItem value="+44">+44 (United Kingdom)</SelectItem>
                    <SelectItem value="+91">+91 (India)</SelectItem>
                    <SelectItem value="+61">+61 (Australia)</SelectItem>
                    <SelectItem value="+49">+49 (Germany)</SelectItem>
                    <SelectItem value="+33">+33 (France)</SelectItem>
                    <SelectItem value="+81">+81 (Japan)</SelectItem>
                    <SelectItem value="+55">+55 (Brazil)</SelectItem>
                    <SelectItem value="+7">+7 (Russia/Kazakhstan)</SelectItem>
                    <SelectItem value="+34">+34 (Spain)</SelectItem>
                    <SelectItem value="+20">+20 (Egypt)</SelectItem>
                    <SelectItem value="+27">+27 (South Africa)</SelectItem>
                    <SelectItem value="+39">+39 (Italy)</SelectItem>
                    <SelectItem value="+31">+31 (Netherlands)</SelectItem>
                    <SelectItem value="+86">+86 (China)</SelectItem>
                    <SelectItem value="+52">+52 (Mexico)</SelectItem>
                    <SelectItem value="+62">+62 (Indonesia)</SelectItem>
                    <SelectItem value="+92">+92 (Pakistan)</SelectItem>
                    <SelectItem value="+60">+60 (Malaysia)</SelectItem>
                    <SelectItem value="+41">+41 (Switzerland)</SelectItem>
                    <SelectItem value="+47">+47 (Norway)</SelectItem>
                    <SelectItem value="+46">+46 (Sweden)</SelectItem>
                    <SelectItem value="+48">+48 (Poland)</SelectItem>
                    <SelectItem value="+63">+63 (Philippines)</SelectItem>
                    <SelectItem value="+64">+64 (New Zealand)</SelectItem>
                    <SelectItem value="+90">+90 (Turkey)</SelectItem>
                    <SelectItem value="+251">+251 (Ethiopia)</SelectItem>
                    <SelectItem value="+233">+233 (Ghana)</SelectItem>
                    <SelectItem value="+254">+254 (Kenya)</SelectItem>
                    <SelectItem value="+356">+356 (Malta)</SelectItem>
                    <SelectItem value="+971">
                      +971 (United Arab Emirates)
                    </SelectItem>
                    <SelectItem value="+351">+351 (Portugal)</SelectItem>
                    <SelectItem value="+54">+54 (Argentina)</SelectItem>
                    <SelectItem value="+51">+51 (Peru)</SelectItem>
                    <SelectItem value="+966">+966 (Saudi Arabia)</SelectItem>
                    <SelectItem value="+58">+58 (Venezuela)</SelectItem>
                    <SelectItem value="+380">+380 (Ukraine)</SelectItem>
                    <SelectItem value="+264">+264 (Namibia)</SelectItem>
                    <SelectItem value="+963">+963 (Syria)</SelectItem>
                    <SelectItem value="+234">+234 (Nigeria)</SelectItem>
                    <SelectItem value="+381">+381 (Serbia)</SelectItem>
                    <SelectItem value="+376">+376 (Andorra)</SelectItem>
                    <SelectItem value="+389">+389 (North Macedonia)</SelectItem>
                    <SelectItem value="+224">+224 (Guinea)</SelectItem>
                    <SelectItem value="+855">+855 (Cambodia)</SelectItem>
                    <SelectItem value="+972">+972 (Israel)</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  {...register("phoneNumber")}
                  placeholder="Ex. XXXX-XXXX"
                  className="bg-gray-50 border-0 rounded-l-none border-l"
                />
              </div>
            </FormField>
          </div>
        </FormSection>
      </form>
    </FormLayout>
  );
}
