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

}
