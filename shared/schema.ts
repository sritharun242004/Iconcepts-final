import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  requirement: z.string().min(10, "Please describe your requirement in at least 10 characters"),
});

export type ContactInquiry = z.infer<typeof contactInquirySchema>;

export type ContactInquiryWithId = ContactInquiry & {
  id: string;
  createdAt: string;
};
