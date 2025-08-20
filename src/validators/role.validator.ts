import { z } from 'zod';

export const CreateRoleSchema = z.object({
    name: z
        .string({
            required_error: 'Role name is required',
            invalid_type_error: 'Role name must be a string',
        })
        .min(1, { message: 'Role name cannot be empty' }),
});

export const UpdateRoleSchema = z.object({
    roleId: z
        .number({
            required_error: 'Role ID is required',
            invalid_type_error: 'Role ID must be a number',
        }),
    name: z
        .string({
            required_error: 'Role name is required',
            invalid_type_error: 'Role name must be a string',
        })
        .min(1, { message: 'Role name cannot be empty' }),
});

export const DeleteRoleSchema = z.object({
    roleId: z
        .number({
            required_error: 'Role ID is required',
            invalid_type_error: 'Role ID must be a number',
        }),
});
