import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  // console.log(this.userService.currentUser);

  // get isLogged(): boolean {
  //   return this.userService.isLogged;
  // }

  // get currentUser(): IUser {
  //   return this.userService.currentUser;
  // }
  currentUser$: Observable<IUser> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;


  // message: string;
  // isMessageError: boolean;

  private isLoggingOut: boolean = false;

  // private subscription: Subscription;

  constructor(public authService: AuthService, public router: Router) {

  }
    
  logoutHandler(): void {

    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;
    console.log('logout called');

    this.authService.logout$().subscribe({
      next: args => {
        console.log(args);
      },
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoggingOut = false;
      }
  })
 }
}
