import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  initDate: Date;

  constructor() { }

  ngOnInit() {
    this.initDate = new Date();
  }
}
