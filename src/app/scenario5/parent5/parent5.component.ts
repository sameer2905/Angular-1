import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {

  constructor() { }
  @Output() public parentevent = new EventEmitter();

  message(value)
  {
    this.parentevent.emit(value);
  }
  ngOnInit() {
  }

}
