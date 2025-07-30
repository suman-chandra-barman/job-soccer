import { z } from "zod";
import {
  amateurPlayerProfessionalInfoSchema,
  collegePlayerProfessionalInfoSchema,
  fieldStaffProfessionalInfoSchema,
  highSchoolPlayerProfessionalInfoSchema,
  professionalPlayerProfessionalInfoSchema,
} from "./profileValidation";

// // Base professional info schema

// // const baseProfessionalInfoSchema = z.object({
// //   gender: z.string().min(1, "Gender is required"),
// //   availability: z.string().min(1, "Availability is required"),
// //   height: z.string().min(1, "Height is required"),
// //   weight: z.string().min(1, "Weight is required"),

// //   currentClub: z.string().min(2, "Current club is required"),
// //   category: z.string().min(1, "Category is required"),
// //   foot: z.string().min(1, "Foot is required"),
// //   position: z.string().min(1, "Position is required"),
// //   league: z.string().min(1, "League is required"),
// //   agent: z.string().optional(),
// //   socialMedia: z.string().optional(),
// // });

// // Professional Player
// // export const professionalPlayerProfessionalInfoSchema =
// //   baseProfessionalInfoSchema.extend({
// //     nationalTeamCategory: z.string().min(1, "Category is required"),
// //     experience: z.string().min(1, "Experience is required"),
// //     preferredPosition: z.string().min(1, "Preferred position is required"),
// //   });

// // Amateur Player - adds experience and preferred position (uses multiple highlights)
// export const amateurPlayerInfoSchema = baseProfessionalInfoSchema.extend({
//   experience: z.string().min(1, "Experience is required"),
//   preferredPosition: z.string().min(1, "Preferred position is required"),
// });

// // School Player - adds school name and grade (uses single highlights)
// export const schoolPlayerInfoSchema = baseProfessionalInfoSchema.extend({
//   schoolName: z.string().min(2, "School name is required"),
//   grade: z.string().min(1, "Grade is required"),
// });

// // Youth Player - adds age group and parent contact (uses multiple highlights)
// export const youthPlayerInfoSchema = baseProfessionalInfoSchema.extend({
//   ageGroup: z.string().min(1, "Age group is required"),
//   parentContact: z.string().min(10, "Parent contact is required"),
// });

// // Semi-Professional Player - adds contract status (uses single highlights)
// export const semiProfessionalPlayerInfoSchema =
//   baseProfessionalInfoSchema.extend({
//     contractStatus: z.string().min(1, "Contract status is required"),
//     previousClubs: z.string().optional(),
//   });

// Highlights schemas
export const singleHighlightsSchema = z.object({
  videos: z.array(z.instanceof(File)).min(1, "At least one video is required"),
});

export const multipleHighlightsSchema = z.object({
  preInterviewVideos: z
    .array(z.instanceof(File))
    .min(1, "Pre-interview video is required"),
  technicalVideos: z
    .array(z.instanceof(File))
    .min(1, "Technical video is required"),
  practicalVideos: z
    .array(z.instanceof(File))
    .min(1, "Practical video is required"),
  gamePrinciplesVideos: z
    .array(z.instanceof(File))
    .min(1, "Game principles video is required"),
});

// Type definitions
// export type ProfessionalPlayerInfo = z.infer<
//   typeof professionalPlayerProfessionalInfoSchema
// >;

// export type AmateurPlayerInfo = z.infer<typeof amateurPlayerInfoSchema>;
// export type SchoolPlayerInfo = z.infer<typeof schoolPlayerInfoSchema>;
// export type YouthPlayerInfo = z.infer<typeof youthPlayerInfoSchema>;
// export type SemiProfessionalPlayerInfo = z.infer<
//   typeof semiProfessionalPlayerInfoSchema
// >;
// export type SingleHighlights = z.infer<typeof singleHighlightsSchema>;
// export type MultipleHighlights = z.infer<typeof multipleHighlightsSchema>;

// Role types
export type TCandidateRole =
  | "professional-player"
  | "amateur-player"
  | "high-school-player"
  | "college-player"
  | "field-staff"
  | "office-staff";
export type HighlightsType = "single" | "multiple";

// Role configuration
export const candidateRoleConfig: Record<
  TCandidateRole,
  {
    professionalSchema: z.ZodSchema;
    highlightsType: HighlightsType;
    highlightsSchema: z.ZodSchema;
  }
> = {
  "professional-player": {
    professionalSchema: professionalPlayerProfessionalInfoSchema,
    highlightsType: "single",
    highlightsSchema: singleHighlightsSchema,
  },
  "amateur-player": {
    professionalSchema: amateurPlayerProfessionalInfoSchema,
    highlightsType: "single",
    highlightsSchema: singleHighlightsSchema,
  },
  "high-school-player": {
    professionalSchema: highSchoolPlayerProfessionalInfoSchema,
    highlightsType: "single",
    highlightsSchema: singleHighlightsSchema,
  },
  "college-player": {
    professionalSchema: collegePlayerProfessionalInfoSchema,
    highlightsType: "single",
    highlightsSchema: singleHighlightsSchema,
  },
  "field-staff": {
    professionalSchema: fieldStaffProfessionalInfoSchema,
    highlightsType: "single",
    highlightsSchema: singleHighlightsSchema,
  },
  "office-staff": {
    professionalSchema: fieldStaffProfessionalInfoSchema,
    highlightsType: "multiple",
    highlightsSchema: multipleHighlightsSchema,
  },
};
