import { inject } from '@angular/core';
import { ILoginRequest, ILoginResponse } from '../../domain/ports/auth/login.dto';
import { LoginPort } from '../../domain/ports/auth/login.port'
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export class LoginAdapter implements LoginPort{
    private urlApi = `${environment.apiEndpoint}/auth/login`
    private http = inject(HttpClient);
    login(user: ILoginRequest): Promise<ILoginResponse> {
        return lastValueFrom(this.http.post<ILoginResponse>(this.urlApi, user));
    }

}