import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'user-list',
    component:UserListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
