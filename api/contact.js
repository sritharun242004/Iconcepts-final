import { z } from "zod";

const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  requirement: z.string().min(10, "Please describe your requirement in at least 10 characters"),
});

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const result = contactInquirySchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten() });
  }

  return res.status(201).json({
    id: crypto.randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString(),
  });
}
