import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child6a',
  templateUrl: './child6a.component.html',
  styleUrls: ['./child6a.component.css']
})
export class Child6aComponent implements OnInit {
  @Output() public child6aevent = new EventEmitter();
  constructor() { }

  onClick(value)
  {
    this.child6aevent.emit(value);
  }

  ngOnInit() {
  }

}
