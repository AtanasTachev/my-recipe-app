import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { IBase } from '../core/interfaces/base';
import { IUser } from '../core/interfaces/user';

export interface CreateUserDto { 
  name: string,
  username: string, 
  email: string, 
  address: string,
  phone: string
  password: string,
  repeatPassword: string,
}



@Injectable(
  // providedIn: 'root'
)
export class UserService {
  
  currentUser!: IUser;
  // // console.log(apiUrl);
  

  // get isLogged() {
  //   return !!this.currentUser;
  // }

  constructor(private httpClient: HttpClient) {
    // console.log('UserService#constructor');
    // console.log(response);    
  }

    getUser$(): Observable<IUser[]>{
      return this.httpClient.get<IUser[]>(`${environment.apiUrl}/users`)
    }

  //   //https://jsonplaceholder.typicode.com/users

  // login$(userData: { username: string, password: string }): Observable<IUser> {
  //     // const token = response.accessToken;


  //     return this.httpClient
  //       .post<IUser>(`${environment.apiUrl}/auth/login`, userData, { withCredentials: true })//, observe: 'response'
  //       .pipe(
  //         tap(response => console.log(response)),
  //         // map(response => response.body),
  //         tap((user) => this.currentUser = user)
  //         )
  //     }
      
  //     register$(userData: CreateUserDto): Observable<IUser> {
  //     console.log(userData);
  //     return this.httpClient.post<IUser>(`${environment.apiUrl}/auth/register`, userData, { withCredentials: false })
  //   }

    getProfile$(): Observable<IUser> {
      return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
        // .pipe(tap(user => this.currentUser = user))
    }
    //logout(): void {//Observable<IUser> { //userData: { _id: string, username: string, accessToken: string }
      // this.token = null;  
      // this.isAuthenticated = false;  
      // return this.httpClient.post<IUser>(`${environment.apiUrl}/auth/logout`,  { withCredentials: true }) //userData,
    //}

}

