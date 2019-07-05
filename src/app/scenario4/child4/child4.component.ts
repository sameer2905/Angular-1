import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  constructor() { }
@Output() public childevent=new EventEmitter();

onClick(value)
{
  this.childevent.emit(value);
}

  ngOnInit() {
  }

}
