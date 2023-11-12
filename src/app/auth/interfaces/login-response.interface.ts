
import { User } from "./user.interface";

export interface LoginResponse {
    msg:   string;
    token: string;
    user:  User;
}

