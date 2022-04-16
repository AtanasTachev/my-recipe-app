import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'user-list',
    component:UserListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users/:userId',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
