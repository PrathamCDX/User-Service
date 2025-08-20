import { z } from 'zod';

export const CreateLocationSchema = z.object({
    city: z
        .string({ required_error: 'City is required' })
        .optional(),
    state: z
        .string({ required_error: 'State is required' })
        .optional(),
    country: z
        .string({ required_error: 'Country is required' })
        .optional(),
});