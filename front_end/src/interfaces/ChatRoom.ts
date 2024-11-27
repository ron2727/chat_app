import type { User } from "./User";

export interface ChatRoom extends User {
    id: number;
    title: string;
    description: string;
} 