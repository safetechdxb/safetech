import { z } from 'zod';
import xss from "xss"

export const careerFormSchema = z.object({
    firstName: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(3, "First Name is required")
    ),

    lastName: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(3, "Last Name is required")
    ),

    email: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().email("Invalid email")
    ),
  
    phone: z.preprocess(
      (val) => {
        if (typeof val === "string" && val.trim() === "") return undefined
        return typeof val === "string" ? Number(val) : val
      },
      z
        .number({
          required_error: "Enter a valid phone number",
          invalid_type_error: "Enter a valid phone number",
        })
        .min(100000000000, { message: "Enter a valid phone number" })
    ),

    gender: z.preprocess(
        (val) => typeof val === "string" ? xss(val) : val,
        z.string({ required_error: "Gender is required" }).min(1, "Gender is required")
      ),

    dob: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(1, "Date of Birth is required")
    ),

    nationality: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(1, "Nationality is required")
    ),

    currentLocation: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(1, "Current Nation is required")
    ),

    experience: z.preprocess(
        (val) => {
          if (typeof val === "string" && val.trim() === "") return undefined
          return typeof val === "string" ? Number(val) : val
        },
        z
          .number({
            required_error: "Experience is required",
            invalid_type_error: "Experience is required",
          })
          .min(1, { message: "Experience is required" })
      ),

    coverLetter: z.preprocess(
        (val) => typeof val === "string" ? xss(val) : val,
        z.string({ required_error: "Cover Letter is required" }).min(1, "Cover Letter is required")
      ),
      file: z
      .instanceof(File, { message: "Resume is required" })
      .refine((file) => file.size <= 10 * 1024 * 1024, {
        message: "File must be smaller than 10MB",
      })
      .refine(
        (file) =>
          ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type),
        {
          message: "Only PDF, DOC, and DOCX files are allowed",
        }
      ),
      position: z.preprocess(
        (val) => typeof val === "string" ? xss(val) : val,
        z.string({ required_error: "Position is required" }).min(1, "Position is required")
      ),
  })
