import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-host',
  templateUrl: './directive-host.component.html',
  styleUrls: ['./directive-host.component.css']
})
export class DirectiveHostComponent implements OnInit {

  showUnless: boolean;

  constructor() { }

  ngOnInit() {
    this.showUnless = true;
  }

}
