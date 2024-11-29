import type { User } from "./User";

export interface ChatMessage{ 
    id: number;
    message: string; 
    user: User
}