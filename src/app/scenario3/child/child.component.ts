import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <h2>{{"hello "+ parentData}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
