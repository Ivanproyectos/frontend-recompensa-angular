import { ILoginRequest, ILoginResponse } from "../../ports/auth/login.dto";
export abstract class LoginPort {
    abstract login(user: ILoginRequest): Promise<ILoginResponse>;
} 