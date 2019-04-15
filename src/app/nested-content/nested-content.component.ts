import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nested-content',
  templateUrl: './nested-content.component.html',
  styleUrls: ['./nested-content.component.css']
})
export class NestedContentComponent implements OnInit, OnDestroy {
  initDate: Date;

  constructor() { }

  ngOnInit() {
    console.log('app-nested-component initialized!');
    this.initDate = new Date();
  }

  ngOnDestroy() {
    console.log('app-nested-component destroyed!');
  }
}
