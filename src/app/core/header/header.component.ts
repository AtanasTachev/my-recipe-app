import { Component } from '@angular/core';
import { IUser, UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUser(): IUser {
    return this.userService.currentUser;
  }

  constructor(public userService: UserService) {

  }

  logoutHandler(): void {
    this.userService.logout();
  }

}
