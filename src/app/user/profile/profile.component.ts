import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthModuleState } from 'src/app/auth/+store';
import { ActivatedRoute } from '@angular/router'
import { profilePageInitalized } from 'src/app/auth/+store/actions';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../core/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  currentUser!: IUser;
  // currentUser$ : Observable<IUser> = this.store.select(state => state.auth.profile.currentProfile);

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService, 
    private router: Router,
    private store: Store<IAuthModuleState>) { }


  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
      // const userId = params['userId'];
    // this.userService.getProfile$().subscribe({
    //   next: (user) => {
    //     this.currentUser = user;
    //   },
    //   error: () => {
    //     this.router.navigate(['/login'])
    //   }
    // })
    // this.hasErrorHappened.subscribe((hasError) => {
    //   if (hasError) {
    //     this.router.navigate(['/user/login'])
    //   }
    // })
  
    this.store.dispatch(profilePageInitalized());
  
  // this.activatedRoute.params.subscribe(params => {
  //   const userId = params['userId'];
  //   this.userService.getProfileById$(userId).subscribe(user => {
  //     this.currentUser = user;
  //   });
  // })

  }
}
