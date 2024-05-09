import { z } from 'zod';

export const createQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(255, { message: 'Title is too long. Max 255' }),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .min(1, { message: 'Description is required' }),
});
