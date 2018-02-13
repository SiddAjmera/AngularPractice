import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  prop: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.propChanged.subscribe(prop => this.prop = prop);
  }

}
