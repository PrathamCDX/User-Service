export type CreateSkillDto = {
    userId: number;
    skillList: string[];
}

export type UpdateSkillDto = {
    userId: number;
    skillId: number;
    name: string;
}

export type DeleteSkillDto = {
    userId: number;
    skillId: number;
    name?: string;
}