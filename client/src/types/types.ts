
export interface BaseUser {
    email: string,
}

export interface AuthenticateUser extends BaseUser {
    password: string
}

export interface User extends BaseUser {
    name: string
    user_id: number
}