import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthModuleState } from 'src/app/auth/+store';
import { profilePageInitalized } from 'src/app/auth/+store/actions';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../core/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  currentUser!: IUser;

  constructor(
    private userService: UserService, 
    private router: Router,
    private store: Store<IAuthModuleState>) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: () => {
        this.router.navigate(['/login'])
      }
    })

    this.store.dispatch(profilePageInitalized());
  }

}
