import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

import { CustomValidators } from './../../classes/custom.validators';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {

  communicationOptions: string[];
  genders: string[];
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.communicationOptions = ['Phone', 'Email'];
    this.genders = ['Male', 'Female', 'Other'];

    this.userForm = new FormGroup({
      'name': new FormControl('John Doe'),
      'username': new FormControl('johndoe', CustomValidators.unique, CustomValidators.asyncUnique),
      'email': new FormControl('John.Doe@example.com'),
      'phone': new FormControl('9876543210'),
      'website': new FormControl('www.JohnDoe.com'),
      'address': new FormGroup({
        'street': new FormControl('123 NE St'),
        'suite': new FormControl('Suite 1400'),
        'city': new FormControl('Bellevue'),
        'zipcode': new FormControl('98004'),
        'geo': new FormGroup({
          'lat': new FormControl('12.2134'),
          'lng': new FormControl('-12.2356')
        })
      }),
      'hobbies': new FormArray([]),
      'company': new FormGroup({
        'name': new FormControl('Beautiful Destinations'),
        'catchPhrase': new FormControl('See Something Beautiful Everyday'),
        'bs': new FormControl('Creates new and exciting content for Tourism Boards and Hotel Chains')
      })
    });
  }

  get username() {
    return this.userForm.get('username');
  }

  addHobby() {
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }

  deleteHobby(index) {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

}
