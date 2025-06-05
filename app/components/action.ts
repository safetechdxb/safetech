"use server";
type ContactFormFields = {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

type SubmitContactFormResult = {
  success: boolean;
  errors?: Record<keyof ContactFormFields, string>;
};
export const submitContactForm = async (_prevState: unknown, formData: FormData): Promise<SubmitContactFormResult> => {
  const name = formData.get("name")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const subject = formData.get("subject")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  const fieldErrors: Record<string, string> = {};

  if (!name) fieldErrors.name = "Name is required.";

  // Phone regex: allows +, digits, spaces, dashes, parentheses; must have 7-15 digits total
  const phoneDigitsOnly = phone.replace(/\D/g, ""); // remove non-digits for length check
  const phoneRegex = /^[+\d\s\-()]{7,20}$/;
  if (!phone) {
    fieldErrors.phone = "Phone is required.";
  } else if (!phoneRegex.test(phone) || phoneDigitsOnly.length < 7 || phoneDigitsOnly.length > 15) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Valid email is required.";

  if (!subject) fieldErrors.subject = "Subject is required.";

  if (!message) fieldErrors.message = "Message is required.";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, errors: fieldErrors };
  }

  // Success logic here

  return { success: true, errors: {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  } };
};

type CareerFormFields = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  dob?: string;
  nationality?: string;
  currentNation?: string;
  experience?: string;
  coverLetter?: string;
  file?: string;
};

type SubmitCareerFormResult = {
  success: boolean;
  errors?: Record<keyof CareerFormFields, string>;
};

export const submitCareerForm = async (_prevState: unknown, formData: FormData): Promise<SubmitCareerFormResult> => {
  const errors: Record<keyof CareerFormFields, string> = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    nationality: "",
    currentNation: "",
    experience: "",
    coverLetter: "",
    file: "",
  };

  const firstName = formData.get("firstName")?.toString().trim() || "";
  const lastName = formData.get("lastName")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const gender = formData.get("gender")?.toString().trim() || "";
  const dob = formData.get("dob")?.toString().trim() || "";
  const nationality = formData.get("nationality")?.toString().trim() || "";
  const currentNation = formData.get("currentNation")?.toString().trim() || "";
  const experience = formData.get("experience")?.toString().trim() || "";
  const coverLetter = formData.get("coverLetter")?.toString().trim() || "";
  const file = formData.get("file") as File | null;

  if (!firstName) {
    errors.firstName = "First name is required.";
  }

  if (!lastName) {
    errors.lastName = "Last name is required.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phoneRegex = /^[+\d]?(?:[\d-\s()]*)$/;
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!gender) {
    errors.gender = "Please select your gender.";
  }

  if (!dob) {
    errors.dob = "Date of birth is required.";
  }

  if (!nationality) {
    errors.nationality = "Nationality is required.";
  }

  if (!currentNation) {
    errors.currentNation = "Current location is required.";
  }

  if (!experience) {
    errors.experience = "Work experience is required.";
  }

  if (!coverLetter) {
    errors.coverLetter = "Please provide a cover letter.";
  }

  if (!file || !(file instanceof File)) {
    errors.file = "Please upload your resume.";
  } else {
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      errors.file = "Only PDF, DOC, and DOCX files are allowed.";
    }
    if (file.size > 10 * 1024 * 1024) {
      errors.file = "File must be smaller than 10MB.";
    }
  }

  const hasErrors = Object.values(errors).some((error) => error !== "");

  if (hasErrors) {
    return { success: false, errors };
  }
  

  return { success: true, errors: {
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    nationality: "",
    currentNation: "",
    experience: "",
    coverLetter: "",
    file: ""
  } };
};
