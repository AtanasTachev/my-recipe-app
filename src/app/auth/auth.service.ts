import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  private authToken: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.authToken = authToken;
  }

  private getToken(): string {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('mean-token');
    }
    return this.authToken;
  }

  public logout(): void {
    this.authToken = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }
}
