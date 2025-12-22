export type RegisterUserDto = {
    fullName: string
    email: string
    password: string
    phoneNo: string
    graduationYear: string
}

export type LoginUserDto = {
    email: string
    password: string
}

export type FindUserByNameDto = {
    fullName: string,
    page: number,
    limit: number
}