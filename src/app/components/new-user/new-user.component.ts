import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() { }

  ngOnInit() {
    this.genders = [ 'Male', 'Female', 'Other' ];
    this.communicationModes = [ 'Phone', 'Email' ];
  }

  submit(userForm) {
    console.log('Form Submitted!', userForm);
  }

}
