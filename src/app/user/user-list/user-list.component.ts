import { Component, OnInit } from '@angular/core';
import { UserService , IUser} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUser$().subscribe(users => {
    //   this.users = users;
    // })
  }

}
