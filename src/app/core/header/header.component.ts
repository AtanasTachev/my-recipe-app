import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, mergeMap, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user/user.service';
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
  refreshUserRequest$ = new BehaviorSubject(undefined);
  // userId = this.authService.currentUser$


  
  // message: string;
  // isMessageError: boolean;
  
  private isLoggingOut: boolean = false;
  
  // private subscription: Subscription;
  
  constructor(
    public authService: AuthService, 
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userService: UserService
    ) {
    
  }

  // print(): void {
  //   console.log(this.currentUser$);
  // }
  // ngOnInit(): void {
  // combineLatest([
  //   this.activatedRoute.params
  //     .pipe(
  //       mergeMap(params => {
  //         const userId = params['userId'];
  //         return this.refreshUserRequest$.pipe(mergeMap(() => this.userService.getUserById$(userId)))
  //       })
  //     ),
  //   this.authService.currentUser$
  // ])
  //   .subscribe(([recipe, user]) => {
  //     // this.currentUser = user
  //     // this.user = recipe;
  //     // this.canSubscribe = user && !this.recipe.subscribers.includes(user?._id);
  //     // this.isUserOwner = user && this.recipe.userId === user._id;
  //   });
  // }
  
  
  
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
