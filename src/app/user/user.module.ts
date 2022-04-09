import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UserListComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserListComponent,
    ProfileComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
