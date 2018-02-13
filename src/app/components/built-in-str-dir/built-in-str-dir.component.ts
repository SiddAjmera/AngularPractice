import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-str-dir',
  templateUrl: './built-in-str-dir.component.html',
  styleUrls: ['./built-in-str-dir.component.css']
})
export class BuiltInStrDirComponent implements OnInit {

  messages: string[];
  showList: boolean;
  alertType: string;

  constructor() { }

  ngOnInit() {
    this.messages = [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4',
      'Message 5'
    ];
    this.showList = true;
  }

}
