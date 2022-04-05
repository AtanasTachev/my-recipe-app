import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../core/interfaces/auth';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  private accessToken: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.accessToken = accessToken;
  }

  private getToken(): string {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem('mean-token');
    }
    return this.accessToken;
  }

  public logout(): void {
    this.accessToken = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const accessToken = this.getToken();
    let payload;
    if (accessToken) {
      payload = accessToken.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;
  
    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }

}
