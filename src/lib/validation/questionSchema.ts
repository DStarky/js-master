import { z } from 'zod';

export const questionSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(255, { message: 'Title is too long. Max 255' }),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .min(1, { message: 'Description is required' })
    .max(65535),
});

export const patchQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(255, { message: 'Title is too long. Max 255' })
    .optional(),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .min(1, { message: 'Description is required' })
    .max(65535)
    .optional(),
  authoredByUserID: z
    .string()
    .min(1, { message: 'authoredByUserID is required' })
    .max(255, { message: 'authoredByUserID is too long. Max 255' })
    .optional()
    .nullable(),
});
