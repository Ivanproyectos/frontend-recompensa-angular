import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private cookies: CookieService) { }
  hasSession(): boolean {
    return !!this.cookies.get('credentials_token');
  }
  setSession(token: string, timeStamp: number): void {
    const expiration = new Date(timeStamp * 1000);
    this.cookies.set('credentials_token', token,expiration);
  }
  getToken(): string {
    return this.cookies.get('credentials_token');
  }
}
