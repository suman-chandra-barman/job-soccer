"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormLayout } from '@/components/form/FormLayout';
import { FormSection } from '@/components/form/FormSection';
import { FormField } from '@/components/form/fields/FormField';
import { FileDropzone } from '@/components/form/fields/FileDropzone';
import { multipleHighlightsSchema, type MultipleHighlights } from '@/shchemas/candidateRole';

interface MultipleHighlightsFormProps {
  onNext: (data: MultipleHighlights) => void;
  onPrev: () => void;
  initialData?: Partial<MultipleHighlights>;
  steps?: Array<{
    id: number;
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
}

export function MultipleHighlightsForm({ onNext, onPrev, initialData, steps }: MultipleHighlightsFormProps) {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<MultipleHighlights>({
    resolver: zodResolver(multipleHighlightsSchema),
    defaultValues: initialData,
    mode: 'onChange',
  });

  const preInterviewVideos = watch('preInterviewVideos') || [];
  const technicalVideos = watch('technicalVideos') || [];
  const practicalVideos = watch('practicalVideos') || [];
  const gamePrinciplesVideos = watch('gamePrinciplesVideos') || [];

  const onSubmit = (data: MultipleHighlights) => {
    onNext(data);
  };

  return (
    <FormLayout
      steps={steps}
      onNext={handleSubmit(onSubmit)}
      onPrev={onPrev}
      showPrev={true}
      nextLabel="Complete"
      isNextDisabled={!isValid}
    >
      <form className="space-y-8">
        <FormSection title="Pre Interview Assessment Video">
          <FormField error={errors.preInterviewVideos?.message}>
            <FileDropzone
              onFilesChange={(files) => setValue('preInterviewVideos', files)}
              accept="video/*"
              multiple={false}
              maxFiles={1}
              placeholder="Drag & drop your video here, or Browse"
            />
          </FormField>
        </FormSection>

        <FormSection title="Technical Video">
          <FormField error={errors.technicalVideos?.message}>
            <FileDropzone
              onFilesChange={(files) => setValue('technicalVideos', files)}
              accept="video/*"
              multiple={false}
              maxFiles={1}
              placeholder="Drag & drop your video here, or Browse"
            />
          </FormField>
        </FormSection>

        <FormSection title="Practical Video">
          <FormField error={errors.practicalVideos?.message}>
            <FileDropzone
              onFilesChange={(files) => setValue('practicalVideos', files)}
              accept="video/*"
              multiple={false}
              maxFiles={1}
              placeholder="Drag & drop your video here, or Browse"
            />
          </FormField>
        </FormSection>

        <FormSection title="Game Principles">
          <FormField error={errors.gamePrinciplesVideos?.message}>
            <FileDropzone
              onFilesChange={(files) => setValue('gamePrinciplesVideos', files)}
              accept="video/*"
              multiple={false}
              maxFiles={1}
              placeholder="Drag & drop your video here, or Browse"
            />
          </FormField>
        </FormSection>
      </form>
    </FormLayout>
  );
}