import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(5, { message: 'Your name is too short!' }),
  username: z.string().min(5, { message: 'Your username is too short!' }).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Your password needs to be stronger (at least 8 characters)!' }),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Your password needs to be stronger (at least 8 characters)!' }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});