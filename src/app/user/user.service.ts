import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  "name": string,
  "username": string,
  "email": string,
  "address": string,
  "phone":string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

    getUser$(): Observable<IUser[]>{
      return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    }
}

