import { z } from 'zod';

export const createSkillSchema = z.object({
    skills: z
        .array(
            z.string({
                required_error: 'Each skill must be a string',
                invalid_type_error: 'Skill must be a string',
            })
                .min(1, { message: 'Skill name cannot be empty' })
        )
        .nonempty({ message: 'At least one skill must be provided' }),
});

export const updateSkillSchema = z.object({
    skillId: z
        .number({
            required_error: 'Skill ID is required',
            invalid_type_error: 'Skill ID must be a number',
        }),
    name: z
        .string({
            required_error: 'Skill name is required',
            invalid_type_error: 'Skill name must be a string',
        })
        .min(1, { message: 'Skill name cannot be empty' }),
});

export const deleteSkillsSchema = z.object({
    skillId: z
        .number({
            required_error: 'Skill ID is required',
            invalid_type_error: 'Skill ID must be a number',
        }),
    name: z
        .string({
            invalid_type_error: 'Skill name must be a string',
        })
        .optional(),
});
