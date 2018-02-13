import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { HookLogger } from '../../decorators/class.decorator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@HookLogger()
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
