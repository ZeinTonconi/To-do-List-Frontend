// Generated by https://quicktype.io

export interface LoginResponse {
    msg:   string;
    token: string;
    user:  User;
}

export interface User {
    id:       string;
    email:    string;
    password: string;
}