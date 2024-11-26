import type { LoginCredentials } from "./LoginCredentials"

export interface RegisterCredentials extends LoginCredentials {  
    user_name: string
    password_confirmation: string
}