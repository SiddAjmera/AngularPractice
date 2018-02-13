import { Laptop } from './../../classes/laptop';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { HookLogger, Readonly } from '../../decorators/class.decorator';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
@HookLogger({
  hooks: ['ngOnInit', 'ngAfterViewInit']
})
export class ParentComponent implements OnInit {

  @Readonly('This is a readonly string and will not change!') readonly: string;
  dateToday: Date;
  users: IUser[];
  filterIdType: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dateToday = new Date();
    this.users = this.userService.getUsers();
    let laptop: Laptop = new Laptop();
    // console.log(laptop['stickers']);
    console.log(this.readonly);
    this.readonly = 'This was changed!';
    console.log(this.readonly);
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacob Riglin',
      email: 'jacob@domain.com'
    });
  }

}
