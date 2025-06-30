import { z } from 'zod';
import xss from "xss"

export const contactFormSchema = z.object({
    name: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(3, "Name is required")
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
        .min(1000000000, { message: "Enter a valid phone number" })
    ),

    subject: z.preprocess(
      (val) => typeof val === "string" ? xss(val) : val,
      z.string().min(1, "Subject is required")
    ),

    message: z.preprocess(
        (val) => typeof val === "string" ? xss(val) : val,
        z.string({ required_error: "Message is required" }).min(1, "Message is required")
      ),
  })
