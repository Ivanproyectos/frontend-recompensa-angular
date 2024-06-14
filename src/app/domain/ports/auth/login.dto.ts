export interface ILoginRequest {
    correo: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    expires: number;
}