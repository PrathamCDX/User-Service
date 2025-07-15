export type RegisterUserDto = {
    fullName: string
    email: string
    password: string
    phoneNo: string
}

export type LoginUserDto = {
    email: string
    password: string
}