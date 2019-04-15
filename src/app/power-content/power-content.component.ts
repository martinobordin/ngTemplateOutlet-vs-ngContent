import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-power-content',
  templateUrl: './power-content.component.html',
  styleUrls: ['./power-content.component.css']
})
export class PowerContentComponent implements OnInit {
  display = false;

  @Input()
  content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
