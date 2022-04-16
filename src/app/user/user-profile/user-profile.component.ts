import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, mergeMap, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';
import { IAuthModuleState } from 'src/app/auth/+store';
import { profilePageInitalized } from 'src/app/auth/+store/actions';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  currentUser!: IUser;
  refreshUserRequest$ = new BehaviorSubject(undefined);

  constructor(
    private store: Store<IAuthModuleState>,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.store.dispatch(profilePageInitalized());
    combineLatest([
      this.activatedRoute.params
        .pipe(
          mergeMap(params => {
            const userId = params['userId'];
            return this.refreshUserRequest$.pipe(mergeMap(() => this.userService.getUserById$(userId)))
          })
        ),
      this.authService.currentUser$
    ])
      .subscribe(([recipe, user]) => {
        this.currentUser = user
        // this.user = recipe;
        // this.canSubscribe = user && !this.recipe.subscribers.includes(user?._id);
        // this.isUserOwner = user && this.recipe.userId === user._id;
      });

  }

}
