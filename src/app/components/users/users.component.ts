import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userService.getUsersViaREST().subscribe(
      users => this.users = users
    );
  }

}
