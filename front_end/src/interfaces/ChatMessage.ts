import type { User } from "./User";

export interface ChatMessage{ 
    id: string;
    message: string; 
    user: User
}