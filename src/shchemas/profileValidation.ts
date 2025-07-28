import { z } from 'zod';

// Personal Information Schema
export const personalInfoSchema = z.object({
  image: z.instanceof(File).optional(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  placeOfBirth: z.string().min(2, 'Place of birth must be at least 2 characters'),
  nationality: z.string().min(2, 'Nationality is required'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
});

// Professional Information Schema
export const professionalInfoSchema = z.object({
  gender: z.string().min(1, 'Gender is required'),
  availability: z.string().min(1, 'Availability is required'),
  height: z.string().min(1, 'Height is required'),
  weight: z.string().min(1, 'Weight is required'),
  currentClub: z.string().min(2, 'Current club is required'),
  category: z.string().min(1, 'Category is required'),
  pool: z.string().min(1, 'Pool is required'),
  position: z.string().min(1, 'Position is required'),
  league: z.string().min(1, 'League is required'),
  agent: z.string().optional(),
  socialMedia: z.string().optional(),
});

// Highlights Schema
export const highlightsSchema = z.object({
  videos: z.array(z.instanceof(File)).min(1, 'At least one video is required'),
});

// Combined Schema
export const completeProfileSchema = z.object({
  personalInfo: personalInfoSchema,
  professionalInfo: professionalInfoSchema,
  highlights: highlightsSchema,
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ProfessionalInfo = z.infer<typeof professionalInfoSchema>;
export type Highlights = z.infer<typeof highlightsSchema>;
export type CompleteProfile = z.infer<typeof completeProfileSchema>;