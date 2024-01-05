
import { User } from "./user.interface";

export interface RegisterResponse {
    msg:   string;
    token: string,
    user:  User;
}

