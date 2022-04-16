import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserListComponent,
    ProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserListComponent,
    ProfileComponent,
    UserProfileComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
