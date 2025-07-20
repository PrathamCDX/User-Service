export type CreateRoleDto={
    userId: number;
    name: string;
}

export type UpdateRoleDto={
    userId: number;
    roleId: number;
    name: string;
}

export type DeleteRoleDto= {
    userId: number;
    roleId: number;
}

export type GetRoleDto = {
    userId: number; 
}