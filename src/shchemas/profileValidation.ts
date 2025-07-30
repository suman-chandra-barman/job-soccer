import { z } from "zod";

// Personal Information Schema
export const personalInfoSchema = z.object({
  image: z.instanceof(File).optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  placeOfBirth: z
    .string()
    .min(2, "Place of birth must be at least 2 characters"),
  nationality: z.string().min(2, "Nationality is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});

// Amateur player Professional Information Schema
export const amateurPlayerProfessionalInfoSchema = z.object({
  gender: z.string().min(1, "Gender is required"),
  availability: z.string().min(1, "Availability is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  currentClub: z.string().min(2, "Current club is required"),
  category: z.string().min(1, "Category is required"),
  foot: z.string().min(1, "Foot is required"),
  position: z.string().min(1, "Position is required"),
  league: z.string().min(1, "League is required"),
  agent: z.string().optional(),
  socialMedia: z.string().optional(),
});

// Professional player Professional Information Schema
export const professionalPlayerProfessionalInfoSchema = z.object({
  gender: z.string().min(1, "Gender is required"),
  availability: z.string().min(1, "Availability is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  nationalTeamCategory: z.string().min(1, "National Team Category is required"),
  nationalTeamGames: z.string().min(1, "National Team Games is required"),
  currentClub: z.string().min(2, "Current club is required"),
  socialMedia: z.string().min(1, "Social Media is required"),
  foot: z.string().min(1, "Foot is required"),
  position: z.string().min(1, "Position is required"),
  divisionLevel: z.string().min(1, "Division Level is required"),
  teamsJoined: z.string().min(1, "Team's Joined is required"),
  agent: z.string().min(1, "Agent is required"),
  contractExpires: z.string().min(1, "Contract expires is required"),
});

// High School player Professional Information Schema
export const highSchoolPlayerProfessionalInfoSchema = z.object({
  gender: z.string().min(1, "Gender is required"),
  availability: z.string().min(1, "Availability is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  currentClub: z.string().min(2, "Current club is required"),
  socialMedia: z.string().min(1, "Social Media is required"),
  category: z.string().min(1, "Category is required"),
  foot: z.string().min(1, "Foot is required"),
  position: z.string().min(1, "Position is required"),
  league: z.string().min(1, "League is required"),
  agent: z.string().min(1, "Agent is required"),
  schoolName: z.string().min(1, "School Name is required"),
  satOrAct: z.string().optional(),
  gpa: z.string().optional(),
});

// High School player Professional Information Schema
export const collegePlayerProfessionalInfoSchema = z.object({
  gender: z.string().min(1, "Gender is required"),
  availability: z.string().min(1, "Availability is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  currentClub: z.string().min(2, "Current club is required"),
  socialMedia: z.string().min(1, "Social Media is required"),
  category: z.string().min(1, "Category is required"),
  foot: z.string().min(1, "Foot is required"),
  position: z.string().min(1, "Position is required"),
  league: z.string().min(1, "League is required"),
  agent: z.string().min(1, "Agent is required"),
  schoolName: z.string().min(1, "School Name is required"),
  diploma: z.string().min(1, "Diploma is required"),
  satOrAct: z.string().optional(),
  gpa: z.string().optional(),
});

// Field staff Professional Information Schema
export const fieldStaffProfessionalInfoSchema = z.object({
  availability: z.string().min(1, "Availability is required"),
  currentClub: z.string().min(2, "Current club is required"),
  socialMedia: z.string().min(1, "Social Media is required"),
  category: z.string().min(1, "Category is required"),
  licenses: z.string().min(1, "License is required"),
  position: z.string().min(1, "Position is required"),
  league: z.string().min(1, "League is required"),
  agent: z.string().min(1, "Agent is required"),
  country: z.string().min(1, "Country is required"),
});

// Office staff Professional Information Schema
export const officeStaffProfessionalInfoSchema = z.object({
  availability: z.string().min(1, "Availability is required"),
  currentClub: z.string().min(2, "Current club is required"),
  socialMedia: z.string().min(1, "Social Media is required"),
  category: z.string().min(1, "Category is required"),
  licenses: z.string().min(1, "License is required"),
  position: z.string().min(1, "Position is required"),
  league: z.string().min(1, "League is required"),
  agent: z.string().min(1, "Agent is required"),
  country: z.string().min(1, "Country is required"),
  boysOrGirls: z.string().min(1, "Boys or Girls is required"),
});

// Highlights Schema
export const highlightsSchema = z.object({
  videos: z.array(z.instanceof(File)).min(1, "At least one video is required"),
});

// Combined Schema
export const completeProfileSchema = z.object({
  personalInfo: personalInfoSchema,
  professionalInfo: amateurPlayerProfessionalInfoSchema,
  highlights: highlightsSchema,
});

export type TPersonalInfo = z.infer<typeof personalInfoSchema>;
export type THighlights = z.infer<typeof highlightsSchema>;
export type TCompleteProfile = z.infer<typeof completeProfileSchema>;

export type TAmateurPlayerProfessionalInfo = z.infer<
  typeof amateurPlayerProfessionalInfoSchema
>;
export type TProfessionalPlayerProfessionalInfo = z.infer<
  typeof professionalPlayerProfessionalInfoSchema
>;
export type THighSchoolPlayerProfessionalInfo = z.infer<
  typeof highSchoolPlayerProfessionalInfoSchema
>;
export type TCollegePlayerProfessionalInfo = z.infer<
  typeof collegePlayerProfessionalInfoSchema
>;
export type TFieldStaffProfessionalInfo = z.infer<
  typeof fieldStaffProfessionalInfoSchema
>;
export type TOfficeStaffProfessionalInfo = z.infer<
  typeof officeStaffProfessionalInfoSchema
>;

// Role types
export type CandidateRole =
  | "professional-player"
  | "amateur-player"
  | "high-school-player"
  | "college-player"
  | "filed-staff"
  | "office-staff";
export type HighlightsType = "single" | "multiple";
