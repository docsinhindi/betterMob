import { z } from "zod";

export const LOGIN_FORM_SCHEMA = z.object({
  name: z
    .string()
    .min(6, {
      message: "Name must be at least 6 characters.",
    })
    .max(16, {
      message: "Name must be at most 16 characters.",
    }),
  gmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  
  feedback: z.string().min(1, { message: 'Feedback is required' }), 
});
