import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  "specialty": string,
  "title": string,
  "firstName": string,
  "lastName": string,
  "email":string,
  "password": string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

    getUser$(): Observable<IUser[]>{
      return this.httpClient.get<IUser[]>('https://git.heroku.com/workflow-project-server.git')
    }
}

